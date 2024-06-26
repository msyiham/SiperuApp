import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
import CustomInput from '../../../components/FormInput'
import PasswordInput from '../../../components/PasswordInput'
import SweetAlert from "react-native-sweet-alert"
import {signInWithEmailAndPassword} from "firebase/auth"
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../hooks/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import Loading from '../../../components/Loading'
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const onPasswordChange = (text) => {
    setPassword(text); // Set the password in the state
  };
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;

  const LoginPressed = () => {
    if (!email || !password) {
      // Validate if email or password is empty
      SweetAlert.showAlertWithOptions({
        title: 'Login Gagal',
        subTitle: 'Tolong lengkapi input email & password ',
        confirmButtonTitle: 'OK',
        style: 'error',
        cancellable: false,
      });
      return;
    }
  
    setLoading(true); // Assuming you have a setLoading function to handle loading state
  
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Sign-in successful
      const user = userCredential.user;
      console.log('User signed in:', user.uid);

      // Fetch the user data from Firestore
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const username = userData.username;

        // Navigate to the Home screen or perform any other actions
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp', params: { user: userData } }],
        });
        SweetAlert.showAlertWithOptions({
          title: 'Login Berhasil',
          subTitle: `Selamat datang, ${username}!`, // Display the username here
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      }
    })
      .catch((error) => {
        // Handle sign-in error
        console.error('Sign-in error:', error.code, error.message);
  
        // Display an alert with the error message
        if (error.code === 'auth/invalid-email') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Masukkan email dengan benar',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/user-not-found') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Email anda belum terdaftar',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'Failed to get document because the client is offline.') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'coba ulangi lagi, masalah terdapat pada jaringan',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/wrong-password') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Password Anda Salah!',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/invalid-credential') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Periksa lagi email & passwordnya',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else {
          SweetAlert.showAlertWithOptions({
            title: 'Gagal',
            subTitle: error.message,
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container>
      <Loading visible={loading}/>
        <Image style={{position:'absolute', alignSelf:'flex-end', bottom:windowHeight*0.91, right:10}} source={require("../../../assets/img/LOGO_UM.png")}/>
        <View style={{alignItems:'center'}}>
          <Image width={windowWidth*0.8} height={windowHeight*0.4} source={require("../../../assets/img/LOGO.png")}/>
          <View>
            <CustomInput title="Email" keyboardType='email-address' placeholder="Email" value={email} setValue={setEmail}/>
            <PasswordInput onPasswordChange={onPasswordChange}/>
          </View>
          <TouchableOpacity onPress={LoginPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:windowHeight*0.04}]}>
              <Text style={{color:'black', fontFamily:Font.font.semibold}}>Masuk</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', marginTop:windowHeight*0.05}}>
              <Text style={{color:'white', fontFamily:Font.font.semibold, fontSize:13.5}}>
                Belum punya akun?
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={{padding:0}}>
                <Text style={{color:"#FFD911", fontFamily:Font.font.semibold, fontSize:13.5}}>  Daftar</Text>
              </TouchableOpacity>
          </View>
        </View>
    </Container>
  )
}

export default Login

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FFD911",
    alignItems:'center',
  },
})