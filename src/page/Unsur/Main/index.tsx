import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
const Unsur = () => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  return (
    <Container>
        <Header title={"Unsur"}/>
        <ScrollView>
            <View>
                <Text>Unsur</Text>
            </View>
        </ScrollView>
    </Container>
  )
}

export default Unsur

const styles = StyleSheet.create({})