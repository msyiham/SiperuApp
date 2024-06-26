import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Font from '../../assets/fonts/font'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Account = ({user}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Container>
      <View style={[styles.header, {height:windowHeight*0.3, borderBottomEndRadius:windowWidth*0.1, borderBottomStartRadius:windowWidth*0.1}]}>
            <Text style={{color:'black'}}>Foto</Text>
            <View style={{backgroundColor:"#FFD911",width:windowWidth*0.4, height:windowHeight*0.03, padding:1, borderRadius:windowWidth*0.01}}>
              <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:12}}>Halo, Selamat Datang</Text>
            </View>
            <Text style={{color:'black', fontFamily:Font.font.bold, fontSize:15}}>{user.fullName}</Text>
            <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:13}}>Siswa {user.school} Kelas {user.grade}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Tes Gaya Belajar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Petunjuk Penggunaan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Unduhan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Hubungi Kami</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Syarat & Ketentuan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03, flexDirection:'row'}]}>
            <Ionicons name="log-out" size={25} color="red"/>
            <Text style={[styles.buttonText, {color:'red'}]}> Keluar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Account

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
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
});
