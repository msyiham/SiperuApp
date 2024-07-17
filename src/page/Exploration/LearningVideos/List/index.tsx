import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../../../../components/Container'
import Header from '../../../../components/Header'
import { FIRESTORE_DB } from '../../../../hooks/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Font from '../../../../assets/fonts/font'
import { Thumbnail } from 'react-native-thumbnail-video';

const List = ({navigation}) => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
    const [playing, setPlaying] = useState(false);
    const firestore = FIRESTORE_DB;
    const [videoData, setVideoData] = useState([]); // Deklarasi videoData sebagai state dengan inisialisasi array kosong
    const handleVideoPress = (videoId) => {
        navigation.navigate('VideoPlayer', { videoId, videoData });
    };
    useEffect(() => {
      const fetchData = async () => {
          try {
              const collectionRef = collection(firestore, 'VideoMateri');
              const q = query(collectionRef, orderBy('order', 'asc'));
              const snapshot = await getDocs(q);
              const data = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
              }));
              console.log('data', data);
              setVideoData(data);
          } catch (error) {
              console.error('Error fetching video data:', error);
          }
      };
  
      fetchData();
  }, []);
  
  return (
    <Container>
        <Header title="Video Materi"/>
        <View style={{flex:1, alignItems:"center", paddingVertical:10}}>
        {videoData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("VideoPlayer", { item })}
            style={[styles.buttonCard, { width: windowWidth * 0.8, height: windowHeight * 0.2, marginBottom:windowHeight*0.15 }]}
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
            <View style={[styles.card, { width: windowWidth * 0.8, height: windowHeight * 0.08, borderBottomLeftRadius: windowWidth * 0.05, borderBottomRightRadius: windowWidth * 0.05 }]}>
                <Text style={styles.videoTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        </View>
    </Container>
  )
}

export default List

const styles = StyleSheet.create({
    buttonCard:{
        borderRadius:10,
        padding:5,
    },
    card:{
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center"
    },
    videoTitle:{
        fontFamily:Font.font.bold,
        color:"black",
        fontSize:17
    },
    thumbnailContainer:{

    }
})