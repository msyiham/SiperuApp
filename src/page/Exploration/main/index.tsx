import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import { explorationMenu } from '../../../data/data'
import Font from '../../../assets/fonts/font'

const ExplorationMain = ({ navigation, route }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const {user, onUpdate} = route.params
  const goToMenu = (item) => {
    console.log("halaman exercise menu:", onUpdate);
    navigation.navigate(item.page, {
      user,
      onUpdate
    });
  };
  return (
    <Container>
      <Header title={"Eksplorasi"} />
      <ScrollView style={{ flex: 1 }}>
        <View>
          {explorationMenu.map((item, index) => (
            <View key={index} style={{ width: windowWidth * 0.5, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={[styles.menuItem, { width: windowWidth * 0.5, height: windowHeight * 0.35, borderRadius: windowWidth * 0.03 }]}
                onPress={() => goToMenu(item)}
              >
                <Image source={item.icon} style={[styles.icon, { width: windowWidth * 0.3, height: windowWidth * 0.3 }]} />
                <View style={[styles.textContainer, { width: windowWidth * 0.5 }]}>
                  <View style={{ height: windowHeight * 0.1, width: windowWidth * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </View>
                  <View style={[styles.buttonContainer, { height: windowHeight * 0.04, width: windowWidth * 0.27 }]}>
                    <Text style={styles.buttonText}>Buka</Text>
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

export default ExplorationMain

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
