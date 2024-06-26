import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Font from '../assets/fonts/font'
const Header = ({title}) => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  return (
    <View style={[styles.header, {marginBottom:15,height:windowHeight*0.15, borderBottomEndRadius:windowWidth*0.1, borderBottomStartRadius:windowWidth*0.1}]}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitle: {
        fontFamily: Font.font.bold,
        fontSize: 20,
        color: "black",
        marginBottom: 10,
      },
})