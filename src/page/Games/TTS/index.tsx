import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const TTS = ({route}) => {
  const {link} = route.params
  console.log(link)
  return (
    <View style={styles.container}>
      <WebView style={styles.webview}
        source={{ uri: link }}
        originWhitelist={['*']}
      />
    </View>
  )
}

export default TTS

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE0B3",
    width: "100%",
    height: "100%",
  },
  webview:{
    flex: 1,
  },
})