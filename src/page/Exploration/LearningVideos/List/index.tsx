import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';
import { FIRESTORE_DB } from '../../../../hooks/firebase';
import { collection, getDocs, orderBy, query, startAfter, limit } from 'firebase/firestore';
import Font from '../../../../assets/fonts/font';
import { Thumbnail } from 'react-native-thumbnail-video';

const List = ({ navigation }) => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
    const [playing, setPlaying] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const firestore = FIRESTORE_DB;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (refresh = false) => {
        if (loading) return;
        setLoading(true);

        try {
            const collectionRef = collection(firestore, 'VideoMateri');
            const q = refresh || !lastVisible
                ? query(collectionRef, orderBy('order', 'asc'), limit(3))
                : query(collectionRef, orderBy('order', 'asc'), startAfter(lastVisible), limit(3));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            if (refresh) {
                setVideoData(data);
                setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
            } else {
                setVideoData(prevData => [...prevData, ...data]);
                setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
            }
        } catch (error) {
            console.error('Error fetching video data:', error);
        } finally {
            setLoading(false);
            if (refresh) setRefreshing(false);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        setLastVisible(null);
        fetchData(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("VideoPlayer", { item })}
            style={[styles.buttonCard, { width: windowWidth * 0.85, marginBottom: windowHeight * 0.05 }]}
        >
            <Image
                source={{ uri: `https://img.youtube.com/vi/${item.id}/0.jpg` }}
                style={{
                    borderTopLeftRadius: windowWidth * 0.05,
                    borderTopRightRadius: windowWidth * 0.05,
                    height: windowHeight * 0.23,
                    width: windowWidth * 0.8,
                    resizeMode: 'cover'
                }}
            />
            <View style={[styles.card, { width: windowWidth * 0.8, height: windowHeight * 0.1, borderBottomLeftRadius: windowWidth * 0.05, borderBottomRightRadius: windowWidth * 0.05 }]}>
                <Text style={styles.videoTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <Container>
            <Header title="Video Materi" />
            <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
            <FlatList
                    data={videoData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ alignItems: 'center' }}
                    onEndReached={() => fetchData()}
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

export default List;

const styles = StyleSheet.create({
    buttonCard: {
        borderRadius: 10,
        padding: 5,
    },
    card: {
        backgroundColor: "white",
        padding:5,
        alignItems: "center"
    },
    videoTitle: {
        fontFamily: Font.font.bold,
        color: "black",
        fontSize: 15
    },
    thumbnailContainer: {}
});
