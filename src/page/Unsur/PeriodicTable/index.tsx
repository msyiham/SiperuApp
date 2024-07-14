import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const PeriodicTable = ({route, navigation}) => {
  const {user, onUpdate} = route.params
  if (user.deviceRegistered === 0) {
      navigation.replace("LockPremium", {user, onUpdate})
  }
  return (
    <View style={styles.container}>
    <WebView style={styles.webview}
      source={{ uri: "https://heyzine.com/flip-book/39f69d27e6.html" }}
      originWhitelist={['*']}
    />
  </View>
  )
}

export default PeriodicTable

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  webview:{
    flex:1
  }
})