import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Font from '../../../assets/fonts/font'
import { contactData } from '../../../data/data'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

const Contact = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const handleLinkPressed = (item) => {
        Linking.openURL(item);
      };
  return (
    <Container>
        <Header title={"Hubungi Kami"}/>
        <ScrollView>
            <View style={{marginTop:windowHeight*0.1, width:windowWidth*0.9}}>
            <Text style={[styles.title, {marginBottom:windowHeight*0.05}]}>Anda bisa menghubungi kami dengan menekan link dalam berbagai plaform berikut:</Text>
            {contactData.map((item, index) => (
                <View key={index} style={{flexDirection:'row'}}>
                    <Icon style={{width:windowWidth*0.05}} name={item.icon} color="#fff" size={20} />
                    <Text style={[styles.text, {width:windowWidth*0.3}]}>
                        {' '}{item.title}
                    </Text>
                    <Text style={[styles.text]}>
                        {': '}
                    </Text>
                    <Text style={[styles.text, styles.email]} onPress={()=>handleLinkPressed(item.linkTo)}>
                        {item.text}
                    </Text>
                </View>
            ))}
            </View>
        </ScrollView>
    </Container>
  )
}

export default Contact

const styles = StyleSheet.create({
    title:{
        fontFamily:Font.font.bold,
        fontSize:16,
        color:"white",
        textAlign:"center",
    },
    text:{
        fontFamily:Font.font.regular,
        fontSize:15,
        color:"white",
        textAlign:"justify",
        marginBottom:15
    },
    email: {
        fontFamily:Font.font.bold,
        
    },
})