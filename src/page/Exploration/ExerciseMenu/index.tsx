import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import { excerciseMenu } from '../../../data/data'
import Font from '../../../assets/fonts/font'
const ExcerciseMenu = ({navigation, route}) => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
    const {user, onUpdate} = route.params
    if (user.deviceRegistered === 0) {
        navigation.replace("LockPremium", {user, onUpdate})
    }
    const goToMenu = (item) => {
      const data = item.data
      console.log("data nya", user[data]);
      const userData = user[data]
      if (userData === 0) {        
        navigation.replace(item.page, {
          user,
          onUpdate
        });
      } else {
        navigation.replace("ExerciseMark", {
          item,
          user,
          onUpdate,
          userData,
        });
      }
    };
  return (
    <Container>
        <Header title={"Menu Latihan Soal"} />
        <ScrollView style={{ flex: 1 }}>
            <View>
            {excerciseMenu.map((item, index) => (
                <View key={index} style={{ width: windowWidth * 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.menuItem, { width: windowWidth * 0.5, height: windowHeight * 0.3, borderRadius: windowWidth * 0.03 }]}
                    onPress={() =>goToMenu(item)}>
                    <View style={[styles.textContainer, { width: windowWidth * 0.5 }]}>
                    <View style={{ height: windowHeight * 0.2, width: windowWidth * 0.45, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                    <View style={[styles.buttonContainer, { height: windowHeight * 0.04, width: windowWidth * 0.4 }]}>
                        <Text style={styles.buttonText}>Latihan</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
            ))}
            </View>
        </ScrollView>
    </Container>
  )
}

export default ExcerciseMenu

const styles = StyleSheet.create({
    menuItem: {
        marginVertical: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        alignItems: 'center',
      },
      icon: {
        resizeMode: 'stretch',
      },
      textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      itemTitle: {
        fontFamily: Font.font.bold,
        color: 'black',
        fontSize: 18,
        textAlign: 'center', // Ensure the title text is centered
      },
      itemDescription: {
        fontFamily: Font.font.regular,
        color: 'black',
        fontSize: 15,
        textAlign: 'center', // Ensure the title text is centered
      },
      buttonContainer: {
        backgroundColor: '#FFD911',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      buttonText: {
        fontFamily: Font.font.bold,
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
      }
})