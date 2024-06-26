import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import Container from '../../components/Container'
import Font from '../../assets/fonts/font'


const SplashScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() =>{
    setTimeout(() =>{
        navigation.replace('MenuLogin')
    }, 2000);
  });
  return (
    <Container>
        <Image style={{position:'absolute', alignSelf:'flex-end', bottom:windowHeight*0.91, right:10}} source={require("../../assets/img/LOGO_UM.png")}/>
        <View style={{alignItems:'center'}}>
          <Image width={windowWidth*0.8} height={windowHeight*0.4} source={require("../../assets/img/LOGO.png")}/>
          <Text style={{fontFamily:Font.font.bold, fontSize:15, textAlign:'center', color:'white'}}>Sistem Periodik Unsur Lebih Mudah dan Menyenangkan</Text>
          <View style={{marginTop:windowHeight*0.1}}>
            <View style={[styles.loadingBar, {width:windowWidth*0.6, height:windowHeight*0.05, borderRadius:windowWidth*0.05}]}>
              <Text style={{color:'black', fontFamily:Font.font.semibold}}>Loading..</Text>
            </View>
          </View>
        </View>
    </Container>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  loadingBar:{
    padding:10,
    backgroundColor:"#FFD911",
    alignItems:'center'
  }
})