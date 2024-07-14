import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
const Music = () => {
  return (
    <Container>
        <Header title={"Lagu Siperu"}/>
        <View style={{flex:1}}>
            <Text>Lagu Siperu</Text>
        </View>
    </Container>
  )
}

export default Music

const styles = StyleSheet.create({})