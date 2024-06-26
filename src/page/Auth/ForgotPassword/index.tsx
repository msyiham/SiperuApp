import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'

const ForgotPassword = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <Container>
        <Image style={{position:'absolute', alignSelf:'flex-end', bottom:windowHeight*0.91, right:10}} source={require("../../../assets/img/LOGO_UM.png")}/>
        <View style={{alignItems:'center'}}>
          <Image width={windowWidth*0.8} height={windowHeight*0.4} source={require("../../../assets/img/LOGO.png")}/>
          <Text style={{fontFamily:Font.font.bold, fontSize:15, textAlign:'center', color:'white'}}>Sistem Periodik Unsur Lebih Mudah dan Menyenangkan</Text>
        </View>
    </Container>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})