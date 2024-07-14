import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
const ExerciseMark = ({navigation, route}) => {
    const {item, user, onUpdate, userData} = route.params
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const goToMenu = (item) => {
        console.log("halaman exercise menu:", onUpdate);
        navigation.replace(item.page, {
          user,
          onUpdate
        });
      };
  return (
    <Container>
        <View style={{padding:10}}>
            <Text style={styles.title}>Anda telah menyelesaikan latihan ini!</Text>
            <Text style={styles.subTitle}>Hasil dari {item.title} Anda sbelumnya adalah:</Text>
            <Text style={styles.point}>{userData*10}/100</Text>
            <Text style={styles.subTitle}>Apakah kamu ingin mengulanginya lagi?</Text>
            <TouchableOpacity
                style={[styles.button, { width: width * 0.3, height: height * 0.05, marginTop: height*0.05 }]}
                onPress={() => goToMenu(item)}
            >
                <Text style={styles.buttonText}>Ulangi</Text>
            </TouchableOpacity>
        </View>
    </Container>
  )
}

export default ExerciseMark

const styles = StyleSheet.create({
    title:{
        fontFamily: Font.font.semibold,
        color:"white",
        fontSize:24,
        textAlign:'center'
    },
    subTitle:{
        fontFamily: Font.font.regular,
        color:"white",
        fontSize:20,
        textAlign:'center',
        marginTop:25
    },
    point:{
        fontFamily: Font.font.bold,
        color:"#FFD911",
        fontSize:30,
        textAlign:'center'
    },
    button: {
        backgroundColor: "#FFD911",
        marginTop: 5,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginBottom:20,
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 15,
        color: "black",
        fontWeight:'700'
    },
})