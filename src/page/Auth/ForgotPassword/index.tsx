import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
import CustomInput from '../../../components/FormInput'
import { FIREBASE_AUTH } from '../../../hooks/firebase';
import SweetAlert from "react-native-sweet-alert"
const ForgotPassword = ({navigation}) => {
    const auth = FIREBASE_AUTH
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [email, setEmail] = useState('');
    const onSubmitPressed = () => {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        SweetAlert.showAlertWithOptions({
          title: 'Berhasil',
          subTitle: `Kami Mengirim Link Reset Password Ke Email Anda`, // Display the username here
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: errorMessage, // Display the username here
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      });
    };

  return (

    <Container>
        <View style={{alignItems:'center'}}>
          <Text style={{fontFamily:Font.font.bold, fontSize:20, textAlign:'center', color:'white', marginBottom:15}}>Reset Kata Sandi</Text>
          <CustomInput title={""} placeholder={"Isilah email anda yang terdaftar"} setValue={setEmail} value={email} keyboardType='email-address'/>
          <TouchableOpacity onPress={onSubmitPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:windowHeight*0.01}]}>
              <Text style={{color:'black', fontFamily:Font.font.semibold}}>Kirim Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={{color:'#FEFBEA', fontFamily:Font.font.regular, fontSize:15}}>Kembali ke halaman login</Text>
            </TouchableOpacity>
        </View>
    </Container>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FFD911",
    alignItems:'center',
    marginBottom: 20
  },
})