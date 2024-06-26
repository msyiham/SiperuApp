import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const PukulTikus = ({route}) => {
  const {link} = route.params
  return (
    <View style={styles.container}>
      <WebView style={styles.webview}
        source={{ uri: link }}
        originWhitelist={['*']}
      />
    </View>
  )
}

export default PukulTikus

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