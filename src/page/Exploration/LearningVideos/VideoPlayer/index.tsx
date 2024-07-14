import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../../components/Container'
import Header from '../../../../components/Header'
import YoutubeIframe from 'react-native-youtube-iframe'
import Font from '../../../../assets/fonts/font'
const VideoPlayer = ({route}) => {
  const { item } = route.params;
  const [playing, setPlaying] = useState(false);
  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();
  return (
    <Container>
        <Header title={"Video Materi"}/>
        <View style={{flex:1}}>
          <View style={[styles.card, {width:width*0.9, height:height*0.7, borderRadius:width*0.02}]}>
            <View style={{alignItems:'center'}}>
              <Text style={styles.videoTitle}>{item.title}</Text>
              <YoutubeIframe
                height={height*0.25}
                width= {width*0.85}
                play={playing}
                videoId={item.id}
                //onChangeState={onStateChange}
                />
            </View>
            <Text style={styles.videoDescription}>{item.description}</Text>
          </View>
        </View>
    </Container>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  card:{
    backgroundColor:"white",
    padding:10
  },
  videoTitle:{
    fontFamily:Font.font.bold,
    color:"black",
    fontSize:20,
    marginBottom:5
  },
  videoDescription:{
    fontFamily:Font.font.regular,
    color:"black",
    fontSize:15,
  }
})