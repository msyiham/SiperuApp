import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Container from '../../../components/Container';
import Font from '../../../assets/fonts/font';
import { gamesData } from '../../../data/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/Header';
const MenuGames = ({ navigation }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  
  return (
    <Container>
      <Header title={"Permainan"}/>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {gamesData.map((item, index) => (
            <View key={index} style={{width:windowWidth*0.5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
              
              style={[styles.menuItem, { width: windowWidth * 0.4, height: windowHeight * 0.45, borderRadius: windowWidth * 0.03 }]}
              onPress={() => navigation.navigate(item.page, { link: item.link })}
            >
              <Image source={item.icon} style={[styles.icon, { width: windowWidth * 0.3, height: windowWidth * 0.3 }]} />
              <View style={styles.textContainer}>
                <View style={{ height: windowHeight * 0.2, width: windowWidth * 0.3 }}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={[styles.buttonContainer, { height: windowHeight * 0.04, width: windowWidth * 0.27 }]}>
                  <Text style={styles.buttonText}>Mainkan</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default MenuGames;

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
    alignItems:"center",
    marginTop:10,
  },
  itemTitle: {
    fontFamily: Font.font.bold,
    color: "black",
    fontSize: 18,
  },
  description: {
    fontFamily: Font.font.regular,
    fontSize: 14,
    color: '#666',
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
    paddingRight: 5, // Add padding to align with icon
  }
});
