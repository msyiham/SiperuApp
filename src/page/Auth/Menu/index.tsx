import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Menu = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <Container>
        <Image style={{position:'absolute', alignSelf:'flex-end', bottom:windowHeight*0.91, right:10}} source={require("../../../assets/img/LOGO_UM.png")}/>
        <Image width={windowWidth*0.6} height={windowHeight*0.4} source={require("../../../assets/img/LOGO.png")}/>
        <View style={{alignItems:'center', marginTop:windowHeight*0.1}}>
          <Text style={{fontFamily:Font.font.bold, fontSize:24, textAlign:'center', color:'white'}}>Daftar</Text>
          <Text style={{fontFamily:Font.font.regular, fontSize:15, textAlign:'center', color:'white'}}>Daftar sekarang dan Belajar Lebih Seru!</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:windowHeight*0.04}]}>
              <Text style={{color:'black', fontFamily:Font.font.semibold}}>Daftar lebih cepat dengan email  <Icon name="envelope" color="#900" /></Text>
          </TouchableOpacity>
          <View style={[styles.buttonLogin, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:windowHeight*0.04}]}>
              <Text style={{color:'white', fontFamily:Font.font.semibold, fontSize:13.5}}>
                Sudah punya akun?
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{padding:0}}>
                <Text style={{color:"#FFD911", fontFamily:Font.font.semibold, fontSize:13.5}}>  Masuk</Text>
              </TouchableOpacity>
          </View>
        </View>
    </Container>
  )
}

export default Menu

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FFD911",
    alignItems:'center',
  },
  buttonLogin:{
    padding:10,
    borderWidth: 2,
    borderColor:"#FFD911",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

})