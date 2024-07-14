import { KeyboardAvoidingView, StyleSheet, useWindowDimensions, View,Platform } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const AI = ({route, navigation}) => {
  const { width, height } = useWindowDimensions();
  const {user, onUpdate} = route.params
  if (user.deviceRegistered === 0) {
      navigation.replace("LockPremium", {user, onUpdate})
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={25} style={{flex:1}}>
    <View style={{flex:1, backgroundColor: '#0641CD' }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://siperu-ai.netlify.app' }}
        scrollEnabled={true}
        />
    </View>
    </KeyboardAvoidingView>
  );
};

export default AI;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#002E9B',
  },
});
