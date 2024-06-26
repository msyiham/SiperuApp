import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import { unsurData } from '../../../data/data'
import Font from '../../../assets/fonts/font'
const Unsur = ({navigation}) => {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  return (
    <Container>
        <Header title={"Unsur"}/>
        <ScrollView>
        {unsurData.map((item, index) => (
            <View key={index} style={{width:windowWidth*0.8, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.menuItem, { width: windowWidth * 0.8, height: windowHeight * 0.38, borderRadius: windowWidth * 0.03 }]}
              onPress={() => navigation.navigate("UnsurDetail", { link: item.image })}
            >
              <Image source={item.icon} style={[styles.icon, { width: windowWidth * 0.5, height: windowWidth * 0.5 }]} />
              <View style={styles.textContainer}>
                <View style={[styles.buttonContainer, { height: windowHeight * 0.05, width: windowWidth * 0.7 }]}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
    </Container>
  )
}

export default Unsur

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
        fontSize: 20,
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
})