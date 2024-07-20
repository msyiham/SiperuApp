import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert, RefreshControl } from 'react-native';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import { collection, doc, getDoc, getDocs, addDoc, orderBy, startAfter, limit, deleteDoc, query } from 'firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Font from '../../../assets/fonts/font';



const Show = ({ route, navigation }) => {
    const { user } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [posts, setPosts] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const firestore = FIRESTORE_DB;

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async (refresh = false) => {
        if (loading) return;
        setLoading(true);

        try {
            let postsQuery;
            if (lastVisible && !refresh) {
                postsQuery = query(
                    collection(firestore, 'posts'),
                    orderBy('timestamp', 'desc'),
                    startAfter(lastVisible),
                    limit(3)
                );
            } else {
                postsQuery = query(
                    collection(firestore, 'posts'),
                    orderBy('timestamp', 'desc'),
                    limit(3)
                );
            }
            const querySnapshot = await getDocs(postsQuery);

            if (querySnapshot.empty) {
                setLoading(false);
                return;
            }

            const postsData = await Promise.all(querySnapshot.docs.map(async docSnapshot => {
                const postData = docSnapshot.data();
                const userDoc = await getDoc(doc(firestore, 'users', postData.userId));
                const username = userDoc.exists() ? userDoc.data().fullName : 'Unknown User';
                const school = userDoc.exists() ? userDoc.data().school : 'Unknown School';
                const grade = userDoc.exists() ? userDoc.data().grade : 'Unknown Grade';

                const likesSnapshot = await getDocs(collection(firestore, 'posts', docSnapshot.id, 'likes'));
                const likeCount = likesSnapshot.size;

                const commentsSnapshot = await getDocs(collection(firestore, 'posts', docSnapshot.id, 'comments'));
                const commentCount = commentsSnapshot.size;

                const userLiked = likesSnapshot.docs.some(doc => doc.data().userId === user.uid);

                return {
                    id: docSnapshot.id,
                    ...postData,
                    username,
                    school,
                    grade,
                    likeCount,
                    commentCount,
                    userLiked
                };
            }));

            //console.log("Posts Data: ", postsData);

            if (refresh) {
                setPosts(postsData);
            } else {
                setPosts(prevPosts => [...prevPosts, ...postsData]);
            }

            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
            //console.log("Last Visible: ", querySnapshot.docs[querySnapshot.docs.length - 1]);
        } catch (error) {
            console.error("Error fetching posts: ", error);
        } finally {
            setLoading(false);
            if (refresh) setRefreshing(false);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        setLastVisible(null);
        fetchPosts(true);
    };

    const createLike = async (postId, userId) => {
        try {
            await addDoc(collection(firestore, 'posts', postId, 'likes'), {
                userId: userId,
            });
        } catch (error) {
            console.error("Error adding like: ", error);
        }
    };

    const deletePost = async (postId) => {
        Alert.alert(
            'Konfirmasi',
            'Apakah Anda yakin ingin menghapus postingan ini?',
            [
                {
                    text: 'Batal',
                    style: 'cancel'
                },
                {
                    text: 'Hapus',
                    onPress: async () => {
                        try {
                            await deleteDoc(doc(firestore, 'posts', postId));
                        } catch (error) {
                            console.error("Error deleting post: ", error);
                        }
                    },
                    style: 'destructive'
                }
            ]
        );
    };

    const renderItem = ({ item }) => {
        const isUserPost = item.userId === user.uid;

        return (
            <View style={[styles.postContainer, { width: windowWidth * 0.9 }]}>
                <Text style={styles.postUsername}>{isUserPost ? "Dibuat oleh Anda" : item.username}</Text>
                {!isUserPost && (
                    <Text style={styles.postSchool}>{item.school} Kelas {item.grade}</Text>
                )}
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
                        <TouchableOpacity 
                            onPress={() => createLike(item.id, user.uid)} 
                            style={{ marginBottom: 5 }} 
                            disabled={item.userLiked}
                        >
                            <FontAwesome 
                                name="thumbs-up" 
                                color="black" 
                                size={25} 
                                solid={item.userLiked} 
                            />
                        </TouchableOpacity>
                        <Text style={styles.toolText}>{item.likeCount} Like</Text>
                    </View>
                </View>
                <View>
                    {isUserPost && (
                        <TouchableOpacity style={styles.deleteButton} onPress={() => deletePost(item.id)}>
                            <Text style={styles.deleteButtonText}>Hapus</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate("DetailDiscuss", { user: user, postId: item.id })}>
                        <Text style={styles.detailButtonText}>Lihat Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const filteredPosts = posts.filter(post =>
        post.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.text.toLowerCase().includes(searchQuery.toLowerCase())
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
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CreateDiscuss', { user: user })} style={[styles.buttonCreate, { width: windowWidth * 0.4, height: windowHeight * 0.05 }]}>
                    <Text style={styles.buttonText}>Buat  <FontAwesome name="comment-alt" solid size={15} color="black" /></Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={filteredPosts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.container}
                    onEndReached={() => fetchPosts()}
                    onEndReachedThreshold={0.5}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
        </Container>
    );
};


export default Show;



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
        fontFamily: Font.font.semibold,
        fontSize: 15,
        color: 'white',
        marginTop: 5
    },
    detailButton:{
        backgroundColor: '#0641CD',
        padding: 10,
        borderRadius: 5,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 5,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontFamily: Font.font.semibold,
        fontSize: 14,
    }
});
