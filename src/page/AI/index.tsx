import { StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import Loading from '../../components/Loading';
const AI = () => {
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: '#002E9B' }}>
      <Loading visible={loading}/>
      <WebView
        style={{ width, height }}
        source={{ uri: 'https://mediafiles.botpress.cloud/5fee8dad-c6d3-40be-9ad2-5ee9227084f7/webchat/bot.html' }}
        originWhitelist={['*']}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
};

export default AI;

const styles = StyleSheet.create({
  webview: {
    flex:1,
    backgroundColor: '#002E9B',
  },
});
