import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import { collection, doc, getDoc, getDocs, addDoc, onSnapshot } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Font from '../../../assets/fonts/font';

const Show = ({ route, navigation }) => {
    const { user } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [posts, setPosts] = useState([]);
    const firestore = FIRESTORE_DB;

    useEffect(() => {
        const unsubscribePosts = onSnapshot(collection(firestore, 'posts'), async (querySnapshot) => {
            const postsData = await Promise.all(querySnapshot.docs.map(async docSnapshot => {
                const postData = docSnapshot.data();
                const userDoc = await getDoc(doc(firestore, 'users', postData.userId));
                const username = userDoc.exists() ? userDoc.data().fullName : 'Unknown User';
                const school = userDoc.exists() ? userDoc.data().school : 'Unknown School';
                const grade = userDoc.exists() ? userDoc.data().grade : 'Unknown School';
            
                const likesSnapshot = await getDocs(collection(firestore, 'posts', docSnapshot.id, 'likes'));
                const likeCount = likesSnapshot.size;
            
                const commentsSnapshot = await getDocs(collection(firestore, 'posts', docSnapshot.id, 'comments'));
                const commentCount = commentsSnapshot.size;
            
                const userLikeSnapshot = await getDocs(collection(firestore, 'posts', docSnapshot.id, 'likes'));
                const userLiked = userLikeSnapshot.docs.some(doc => doc.data().userId === user.uid);

                // Add listeners for subcollections
                const unsubscribeComments = onSnapshot(collection(firestore, 'posts', docSnapshot.id, 'comments'), (commentsSnapshot) => {
                    const updatedCommentCount = commentsSnapshot.size;
                    setPosts(prevPosts => prevPosts.map(post => post.id === docSnapshot.id ? { ...post, commentCount: updatedCommentCount } : post));
                });

                const unsubscribeLikes = onSnapshot(collection(firestore, 'posts', docSnapshot.id, 'likes'), (likesSnapshot) => {
                    const updatedLikeCount = likesSnapshot.size;
                    const updatedUserLiked = likesSnapshot.docs.some(doc => doc.data().userId === user.uid);
                    setPosts(prevPosts => prevPosts.map(post => post.id === docSnapshot.id ? { ...post, likeCount: updatedLikeCount, userLiked: updatedUserLiked } : post));
                });

                return {
                    id: docSnapshot.id,
                    ...postData,
                    username: username,
                    school: school,
                    grade: grade,
                    likeCount: likeCount,
                    commentCount: commentCount,
                    userLiked: userLiked,
                    unsubscribeComments: unsubscribeComments,
                    unsubscribeLikes: unsubscribeLikes
                };
            }));
            
            // Urutkan postsData berdasarkan timestamp
            postsData.sort((a, b) => b.timestamp - a.timestamp);
            
            setPosts(postsData);
        }, (error) => {
            console.error("Error fetching posts: ", error);
        });

        // Cleanup listeners on unmount
        return () => {
            unsubscribePosts();
            posts.forEach(post => {
                if (post.unsubscribeComments) post.unsubscribeComments();
                if (post.unsubscribeLikes) post.unsubscribeLikes();
            });
        };
    }, [firestore, user.uid]);

    const createLike = async (postId, userId) => {
        try {
            await addDoc(collection(firestore, 'posts', postId, 'likes'), {
                userId: userId,
            });
            console.log('Like added!');
        } catch (error) {
            console.error("Error adding like: ", error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={[styles.postContainer, { width: windowWidth * 0.9 }]}>
            <Text style={styles.postUsername}>{item.username}</Text>
            <Text style={styles.postSchool}>{item.school} Kelas {item.grade}</Text>
            <Text style={styles.postText}>{item.text}</Text>
            {item.timestamp && (
                <Text style={styles.postInfo}>
                    diposting pada: {item.timestamp.toDate().toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}
                </Text>
            )}
            <View style={{ paddingTop: 5, borderTopWidth: 1, borderColor: "black", marginVertical: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                <View>
                    <Text style={styles.toolText}>{item.commentCount} Komentar</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => createLike(item.id, user.uid)} style={{ marginBottom: 5 }}>
                        <FontAwesome name="thumbs-up" color="black" size={25} solid={item.userLiked} />
                    </TouchableOpacity>
                    <Text style={styles.toolText}>{item.likeCount} Like</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate("DetailDiscuss", { user: user, postId: item.id })}>
                    <Text style={styles.detailButtonText}>Lihat Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );    

    return (
        <Container>
            <Header title="Forum" />
            <View style={{ width: windowWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                <View style={[styles.searchContainer, { width: windowWidth * 0.55, height: windowHeight * 0.05 }]}>
                    <TextInput
                        placeholder='Cari...'
                        placeholderTextColor={"gray"}
                        style={styles.searchInput}
                    />
                    <Icon name="search" color="gray" size={30} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CreateDiscuss', { user: user })} style={[styles.buttonCreate, { width: windowWidth * 0.4, height: windowHeight * 0.05 }]}>
                    <Text style={styles.buttonText}>Buat  <Icon name="chatbox" size={15} color="black" /></Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View>
                    <FlatList
                        data={posts}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.container}
                    />
                </View>
            </View>
        </Container>
    );
}

export default Show;

const styles = StyleSheet.create({
    buttonCreate: {
        backgroundColor: "#FFD911",
        alignSelf: 'flex-end',
        marginEnd: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        fontFamily: Font.font.semibold,
        color: "black",
        fontSize: 15
    },
    searchInput: {
        fontFamily: Font.font.regular,
        color: "black",
        fontSize: 15
    },
    searchContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginStart: 5
    },
    container: {
        padding: 10,
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
        fontFamily: Font.font.regular
    },
    toolText: {
        fontSize: 14,
        marginBottom: 5,
        color: "black",
        fontFamily: Font.font.regular
    },
    postUsername: {
        fontFamily: Font.font.bold,
        fontSize: 16,
        color: 'black',
    },
    postSchool: {
        fontFamily: Font.font.semibold,
        fontSize: 15,
        color: 'black',
    },
    postInfo: {
        fontFamily: Font.font.regular,
        fontSize: 12,
        color: '#555',
        marginTop: 5
    },
    detailButtonText: {
        fontFamily: Font.font.regular,
        fontSize: 15,
        color: '#0641CD',
        marginTop: 5
    },
    detailButton:{
        justifyContent:"center",
        alignItems:"center"
    }
});
