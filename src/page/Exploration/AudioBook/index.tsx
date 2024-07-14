import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
const AudioBook = ({route, navigation}) => {
  const {user, onUpdate} = route.params
  if (user.deviceRegistered === 0) {
      navigation.replace("LockPremium", {user, onUpdate})
  }
  return (
    <Container>
        <Header title={"Audio Book"}/>
        <View style={{flex:1}}>
            <Text>AudioBook</Text>
        </View>
    </Container>
  )
}

export default AudioBook

const styles = StyleSheet.create({})