import { StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react'

const Container = (props:any) => {
  return (
    <ImageBackground style={styles.Container} source={require("../assets/img/bg.png")}>
      {props.children}
    </ImageBackground>
  )
}

export default Container

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
