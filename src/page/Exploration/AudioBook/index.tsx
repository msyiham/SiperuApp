import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const AudioBook = ({route, navigation}) => {
  const {user, onUpdate} = route.params
  if (user.deviceRegistered === 0) {
      navigation.replace("LockPremium", {user, onUpdate})
  }
  console.log(user.deviceRegistered)
  return (
    <View style={styles.container}>
    <WebView style={styles.webview}
      source={{ uri: "https://heyzine.com/flip-book/3e4ed58960.html" }}
      originWhitelist={['*']}
    />
  </View>
  )
}

export default AudioBook

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  webview:{
    flex:1
  }
})