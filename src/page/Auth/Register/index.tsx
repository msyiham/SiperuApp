import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
import CustomInput from '../../../components/FormInput'
import PasswordInput from '../../../components/PasswordInput'
import SweetAlert from "react-native-sweet-alert"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../hooks/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../../components/Loading'
const Register = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const onPasswordChange = (text) => {
      setPassword(text); // Set the password in the state
    };

    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const firestore = FIRESTORE_DB;
    const onRegisterPressed = async () => {
      try {
        setLoading(true);
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
    
        // Add user data to Firestore with UID as the document ID
        await setDoc(doc(firestore, 'users', user.uid), {
          username: username,
          email: user.email,
          uid: user.uid,
          school: school,
          grade: grade,
          alamat: "",
          fullName: fullName,
          numberPhone: "",
          age: "",
          birthday: "",
          evaluasiPoint: 0,
          totalPointsPreTest: 0,
        });
    
        console.log(response);
        navigation.replace('Login');
        SweetAlert.showAlertWithOptions({
          title: 'Selamat',
          subTitle: `Anda Berhasil Mendaftar, ${username}!`, // Add username here
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      } catch (error) {
        console.log(error);
        if (!email || !password || !username) {
          SweetAlert.showAlertWithOptions({
            title: 'Gagal',
            subTitle: 'Tolong lengkapi input!',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        }  else if (error.code === 'auth/email-already-in-use') {
          SweetAlert.showAlertWithOptions({
            title: 'Gagal',
            subTitle: 'Email anda sudah terdaftar, silahkan Login!',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/invalid-email') {
          SweetAlert.showAlertWithOptions({
            title: 'Gagal',
            subTitle: 'Gunakan email yang valid',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else {
          SweetAlert.showAlertWithOptions({
            title: 'Error',
            subTitle: `Sign up failed: ${error.message}`,
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#746555',
          });
        }
  
      } finally {
        setLoading(false);
      }
    };
  return (
    <Container>
      <Loading visible={loading}/>
      <Image style={{position:'absolute', alignSelf:'flex-end', bottom:windowHeight*0.91, right:10}} source={require("../../../assets/img/LOGO_UM.png")}/>
      <Image style={{marginTop:windowHeight*0.04}} width={windowWidth*0.8} height={windowHeight*0.4} source={require("../../../assets/img/LOGO.png")}/>
      <ScrollView style={{flex:1}}>
        <View style={{alignItems:'center', marginTop:windowHeight*0.02, width:'100%'}}>
          <View>
            <CustomInput title="Email" keyboardType='email-address' placeholder="Email" value={email} setValue={setEmail}/>
            <CustomInput title="Nama Pengguna" keyboardType='text' placeholder="Nama Pengguna" value={username} setValue={setUsername} />
            <CustomInput title="Nama Lengkap" keyboardType='text' placeholder="Isilah dengan nama lengkap" value={fullName} setValue={setFullName} />
            <CustomInput title="Asal Sekolah" keyboardType='text' placeholder="Nama Sekolah" value={school} setValue={setSchool} />
            <CustomInput title="Tingkat Kelas" keyboardType='text' placeholder="10/ 11/ 12" value={grade} setValue={setGrade} />
            <PasswordInput onPasswordChange={onPasswordChange}/>
          </View>
          <TouchableOpacity onPress={onRegisterPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:windowHeight*0.04}]}>
              <Text style={{color:'black', fontFamily:Font.font.semibold}}>Daftar</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', marginTop:windowHeight*0.05, marginBottom:windowHeight*0.03}}>
              <Text style={{color:'white', fontFamily:Font.font.semibold, fontSize:13.5}}>
                Sudah punya akun?
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{padding:0}}>
                <Text style={{color:"#FFD911", fontFamily:Font.font.semibold, fontSize:13.5}}>  Masuk</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}
export default Register

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FFD911",
    alignItems:'center',
  },
})