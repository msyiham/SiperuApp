import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Font from '../../../assets/fonts/font';
const Music = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const intervalRef = useRef(null);
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    useEffect(() => {
      const newSound = new Sound('music.mpeg', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
        setDuration(newSound.getDuration());
        setSound(newSound);
      });

      return () => {
        if (newSound) {
          newSound.release();
        }
      };
    }, []);

    useEffect(() => {
      if (isPlaying) {
        intervalRef.current = setInterval(() => {
          sound.getCurrentTime((seconds) => {
            setCurrentTime(seconds);
          });
        }, 1000);
      } else {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [isPlaying, sound]);

    const playSound = () => {
      if (sound) {
        sound.play(() => {
          setIsPlaying(false);
          setCurrentTime(0);
        });
        setIsPlaying(true);
      }
    };

    const pauseSound = () => {
      if (sound) {
        sound.pause();
        setIsPlaying(false);
      }
    };

    const onSliderValueChange = (value) => {
      if (sound) {
        sound.setCurrentTime(value);
        setCurrentTime(value);
      }
    };
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
  return (
    <Container>
        <Header title={"Lagu Siperu"}/>
        <View style={{flex:1}}>
          <View style={[styles.card, { width: windowWidth * 0.8, height: windowHeight * 0.38, borderRadius: windowWidth * 0.03 }]}>
            <Image source={require('../../../assets/img/UNSUR/3.png')} style={[styles.icon, { width: windowWidth * 0.45, height: windowWidth * 0.45 }]} resizeMode='cover' />
          </View>
          <Text style={{fontFamily:Font.font.semibold, fontSize:15, color:"white", marginStart:windowWidth*0.05, marginTop:20}}>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</Text>
          <Slider
            value={currentTime}
            minimumValue={0}
            maximumValue={duration}
            onValueChange={onSliderValueChange}
            style={{ width: windowWidth*0.8, height: 40 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          {isPlaying ? (
            <TouchableOpacity style={[styles.button, {width:windowWidth*0.15, height:windowWidth*0.15}]} onPress={pauseSound}>
              <Icon name="pause" color="#000" size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, {width:windowWidth*0.15, height:windowWidth*0.15}]} onPress={playSound}>
            <Icon name="play" color="#000" size={20} />
          </TouchableOpacity>
          )}
          </View>
        </View>
    </Container>
  )
}

export default Music

const styles = StyleSheet.create({
  card:{
    backgroundColor:"gray",
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
    marginBottom:25,
    opacity:0.3
  },
  button:{
    backgroundColor:"#FFD911",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  }
})