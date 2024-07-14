import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import { collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Font from '../../../assets/fonts/font';

const Detail = ({ route, navigation }) => {
    const { postId, user } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [post, setPost] = useState(null);
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [showLikes, setShowLikes] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const firestore = FIRESTORE_DB;

    const fetchPostDetails = async () => {
        try {
            const postDoc = await getDoc(doc(firestore, 'posts', postId));
            if (postDoc.exists()) {
                const postData = postDoc.data();
                const userDoc = await getDoc(doc(firestore, 'users', postData.userId));
                const username = userDoc.exists() ? userDoc.data().fullName : 'Unknown User';

                setPost({ ...postData, id: postId, username });

                // Fetch likes
                const likesSnapshot = await getDocs(collection(firestore, 'posts', postId, 'likes'));
                const likesData = await Promise.all(likesSnapshot.docs.map(async likeDoc => {
                    const likeData = likeDoc.data();
                    const userDoc = await getDoc(doc(firestore, 'users', likeData.userId));
                    return userDoc.exists() ? userDoc.data().fullName : 'Unknown User';
                }));
                setLikes(likesData);

                // Fetch comments
                const commentsSnapshot = await getDocs(collection(firestore, 'posts', postId, 'comments'));
                const commentsData = await Promise.all(commentsSnapshot.docs.map(async commentDoc => {
                    const commentData = commentDoc.data();
                    const userDoc = await getDoc(doc(firestore, 'users', commentData.userId));
                    const username = userDoc.exists() ? userDoc.data().fullName : 'Unknown User';
                    return { ...commentData, username, id: commentDoc.id };
                }));
                setComments(commentsData);
            }
        } catch (error) {
            console.error("Error fetching post details: ", error);
        }
    };

    useEffect(() => {
        fetchPostDetails();
    }, []);

    const createComment = async () => {
        if (newComment.trim() === '') return;
        try {
            await addDoc(collection(firestore, 'posts', postId, 'comments'), {
                userId: user.uid,
                text: newComment,
                timestamp: new Date(),
            });
            setNewComment('');
            fetchPostDetails(); // Refresh comments after adding a new one
        } catch (error) {
            console.error("Error adding comment: ", error);
        }
    };

    if (!post) {
        return (
            <Container style={styles.loadingContainer}>
                <Text style={{color:"white", fontFamily:Font.font.semibold, fontSize:15}}>Loading...</Text>
            </Container>
        );
    }

    return (
        <Container>
            <Header title="Detail Postingan" />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={{ flex: 1 }}>
                    <View style={[styles.postContainer, { width: windowWidth * 0.9 }]}>
                        <Text style={styles.postUsername}>{post.username}</Text>
                        <Text style={styles.postText}>{post.text}</Text>
                        <Text style={styles.postInfo}>diposting pada: {post.timestamp.toDate().toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
                    </View>
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity onPress={() => setShowComments(!showComments)} style={styles.toggleButton}>
                            <Text style={styles.sectionTitle}>Komentar</Text>
                            <Icon name={showComments ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
                        </TouchableOpacity>
                        {showComments && (
                            <View style={styles.commentContainer}>
                                <FlatList
                                    data={comments}
                                    renderItem={({ item }) => (
                                        <View >
                                            <Text style={styles.userText}>{item.username}</Text>
                                            <Text style={styles.commentText}>{item.text}</Text>
                                        </View>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )}
                    </View>
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity onPress={() => setShowLikes(!showLikes)} style={styles.toggleButton}>
                            <Text style={styles.sectionTitle}>Likes</Text>
                            <Icon name={showLikes ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
                        </TouchableOpacity>
                        {showLikes && (
                            <FlatList
                                horizontal={true}
                                data={likes}
                                renderItem={({ item }) => <Text style={styles.likeText}>{item}, </Text>}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder="Tambah komentar..."
                        value={newComment}
                        onChangeText={setNewComment}
                    />
                    <TouchableOpacity onPress={createComment} style={styles.button}>
                        <Text style={styles.buttonText}>Kirim</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default Detail;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postContainer: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    postText: {
        fontSize: 14,
        marginBottom: 5,
        color: "black",
        fontFamily: Font.font.regular,
    },
    postUsername: {
        fontFamily: Font.font.bold,
        fontSize: 16,
        color: 'black',
    },
    postInfo: {
        fontFamily: Font.font.regular,
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
    sectionTitle: {
        fontFamily: Font.font.bold,
        fontSize: 18,
        color: 'white',
        marginVertical: 10,
    },
    userText: {
        fontFamily: Font.font.semibold,
        fontSize: 14,
        color: 'black',
        marginVertical: 2,
    },
    commentContainer: {
        padding: 10,
        backgroundColor:"white",

    },
    commentText: {
        fontFamily: Font.font.regular,
        fontSize: 14,
        color: 'black',
        marginBottom:5
    },
    likeText: {
        fontFamily: Font.font.regular,
        fontSize: 14,
        color: 'white',
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: Font.font.regular,
        fontSize: 14,
        color: 'white',
    },
    button: {
        marginLeft: 10,
        backgroundColor: '#FFD911',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Font.font.bold,
        fontSize: 14,
        color: 'black',
    },
    toggleContainer: {
        marginVertical: 10,
    },
    toggleButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
