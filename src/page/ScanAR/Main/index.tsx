import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
import Header from '../../../components/Header'
const Main = ({navigation, route}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const {user, onUpdate} = route.params
    if (user.deviceRegistered === 0) {
        navigation.replace("LockPremium", {user, onUpdate})
    }
    //console.log("AR",onUpdate)
  return (
    <Container>
        <Header title={"Scan AR"}/>
        <ScrollView>
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
                <Text style={styles.title}>Plihlah Objectnya</Text>
                <View style={styles.content}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Hydrogen')} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Hydrogen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Lithium')} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Lithium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Natrium')} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Natrium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Calcium')} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Kalium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Rubidium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Sesium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Fransium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Berilium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Magnesium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Calcium')}  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Kalsium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Aluminium')}  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Stronsium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Radium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Boron</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Aluminium')}  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Aluminium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Galium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Indium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                        <Text style={styles.buttonText}>Talium</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </Container>
  )
}

export default Main

const styles = StyleSheet.create({
    title:{
        fontFamily:Font.font.bold,
        color:"wihte",
        fontSize:20
    },
    content: {
        alignItems:'center',
        marginTop: 25,
        paddingHorizontal: 15, // Add some horizontal padding if needed
      },
      buttonText: {
        color: 'black',
        fontFamily: Font.font.bold,
        fontSize: 15,
      },
      button:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:5,
        borderColor:"#0641CD",
        marginBottom:10
      }
})