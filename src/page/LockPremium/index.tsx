import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Font from '../../assets/fonts/font'
import CustomInput from '../../components/FormInput'
import { FIRESTORE_DB } from '../../hooks/firebase'
import SweetAlert from "react-native-sweet-alert";
import DeviceInfo,{ getUniqueId } from 'react-native-device-info';
import { getDoc, doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import Loading from '../../components/Loading'
const LockPremium = ({navigation, route}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const firestore = FIRESTORE_DB;
    const {user, onUpdate} = route.params
    //console.log(onUpdate)
    const saveCode = async () => {
        try {
          setLoading(true);
          const deviceId = await DeviceInfo.getUniqueId();
          //const deviceId = "device5";
          console.log("deviceId: ", deviceId);
    
          // Check if the document already exists in the Firestore collection
          const codeDocRef = doc(firestore, 'premiumUsers', code);
          const codeDocSnapshot = await getDoc(codeDocRef);
    
          if (!codeDocSnapshot.exists()) {
            // If the document does not exist, create a new document with the initial device ID
            SweetAlert.showAlertWithOptions({
              style:'error',
              title: 'Error',
              subTitle: 'Kode Tidak Valid',
              confirmButtonTitle: 'OK',
            });
          } else {
            // If the document already exists, check if the deviceId is already registered
            const existingDevices = codeDocSnapshot.data()?.device || [];
    
            if (existingDevices.includes(deviceId)) {
              // Show SweetAlert if deviceId is already registered for this code
              SweetAlert.showAlertWithOptions({
                title: 'Perangkat Sudah Terdaftar',
                subTitle: 'Perangkat dengan ID ini sudah terdaftar untuk kode ini.',
                confirmButtonTitle: 'OK',
              });
            } else if (existingDevices.length >= 5) {
              // Show SweetAlert if the maximum limit of devices (4) has been reached
              SweetAlert.showAlertWithOptions({
                title: 'Batas Jumlah Perangkat',
                subTitle: 'Jumlah perangkat sudah mencapai batas maksimum (5).',
                confirmButtonTitle: 'OK',
              });
            } else {
              // Add the new device to the Firestore document
                const updatedDevices = [...existingDevices, deviceId];
                await updateDoc(codeDocRef, {
                    device: updatedDevices,
                });
                SweetAlert.showAlertWithOptions({
                    style: 'success',
                    title: 'Selamat',
                    subTitle: 'Semua fitur sudah bisa anda akses',
                    confirmButtonTitle: 'OK',
                });
                const updatedUser = {
                    ...user,
                    deviceRegistered:1,
                };
                onUpdate(updatedUser);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MainApp', params: { user: updatedUser } }],
                });
              console.log("berhasil");
            }
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  return (
    <Container>
        <Loading visible={loading}/>
        <Header title="Pemberitahuan"/>
        <View style={{flex:1, justifyContent:'center', alignItems:"center", width:windowWidth, padding:10}}>
            <View style={{alignItems:"center",}}>
                <Text style={styles.text}>Beberapa fitur yakni <Text style={styles.textBold}>Audio Book, SPU Beraudio, Augmented Reality, Siperu AI dan Latihan Soal</Text> merupakan fitur untuk pengguna premium.</Text>
                <Text style={styles.textBold}>Anda bisa membukanya dengan memasukkan kode dalam Kit Siperu</Text>
                <CustomInput title="" setValue={setCode} value={code} placeholder="Masukkan Kode" keyboardType={"Text"}/>
                <TouchableOpacity onPress={saveCode} style={[styles.button,{width:windowWidth*0.5, height:windowHeight*0.05}]}>
                    <Text style={styles.buttonText}>Gunakan Kode</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Container>
  )
}

export default LockPremium

const styles = StyleSheet.create({
    text:{
        fontFamily:Font.font.semibold,
        fontSize:15,
        color:"white",
        textAlign:"justify",
        marginBottom:20
    },
    textBold:{
        fontFamily:Font.font.bold,
        fontSize:16,
        color:"white",
        textAlign:"center",
        marginBottom:10
    },
    buttonText:{
        fontFamily:Font.font.bold,
        fontSize:16,
        color:"black",
    },
    button:{
        backgroundColor:"#FFD911",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginTop:5,
    }
})