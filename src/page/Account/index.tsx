import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import Container from '../../components/Container'
import Font from '../../assets/fonts/font'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signOut } from 'firebase/auth';
import {CommonActions} from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../hooks/firebase';
import SweetAlert from 'react-native-sweet-alert';

const Account = ({user, navigation, onUpdate }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [photoURL, setPhotoUrl] = useState(null);
  const auth = FIREBASE_AUTH
  useEffect(() => {
    if (user.photoURL) {
      setPhotoUrl(user.photoURL);
    } else {
      setPhotoUrl(null); // Set photoURL to null if photoURL is empty
    }
  }, [user.photoURL]);
  const goToEditProfile = () => {
    navigation.navigate('EditProfile', {
      user,
      onUpdate: (updatedUser) => {
        onUpdate(updatedUser);
      },
    });
  };

  const goToStudyStyleTest = () => {
    const mostSelectedAnswer = user.StudyStyleTest
    if (user.StudyStyleTest === "") {
      navigation.replace('StudyStyleTest', {
        user,
        onUpdate: (updatedUser) => {
          onUpdate(updatedUser);
        },
      });
    } else{
      navigation.navigate('StudyStyleResult', {
        mostSelectedAnswer,
        user,
        onUpdate: (updatedUser) => {
          onUpdate(updatedUser);
        },
      });
    }

  };
  const logout = () => {
    signOut(auth).then(() => navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    ));
    console.log('Logged out');
    SweetAlert.showAlertWithOptions(
      {
        subTitle: 'Anda Berhasil Keluar Akun',
        confirmButtonTitle: 'YA',
        confirmButtonColor: '#000',
        style: 'success',
        cancellable: true
      },
    );
  };
  const showConfirmLogOut = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar akun?',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Ya', onPress: logout },
      ]
    );
  };


  return (
    <Container>
      <View style={[styles.header, {height:windowHeight*0.3, borderBottomEndRadius:windowWidth*0.1, borderBottomStartRadius:windowWidth*0.1}]}>
            <Image source={{ uri: photoURL || 'https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/user.png?alt=media&token=1fd84b0b-0a31-4f33-8f3b-0195cb789ce6' }} style={[{width:windowWidth*0.2, height:windowWidth*0.2, borderRadius:windowWidth*0.2}]}/>
            <View style={{backgroundColor:"#FFD911",width:windowWidth*0.4, height:windowHeight*0.03, padding:1, borderRadius:windowWidth*0.01, marginTop:10}}>
              <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:12, textAlign:"center"}}>Halo, Selamat Datang</Text>
            </View>
            <Text style={{color:'black', fontFamily:Font.font.bold, fontSize:15}}>{user.fullName}</Text>
            <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:13}}>Siswa {user.school} Kelas {user.grade}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <TouchableOpacity onPress={goToEditProfile} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Ubah Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToStudyStyleTest} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Tes Gaya Belajar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('UserGuide')} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Petunjuk Penggunaan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Unduhan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Contact")} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Hubungi Kami</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("TermConditions")} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
            <Text style={styles.buttonText}>Syarat & Ketentuan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showConfirmLogOut} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03, flexDirection:'row'}]}>
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
