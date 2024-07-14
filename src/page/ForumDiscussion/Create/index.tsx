import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FIRESTORE_DB } from '../../../hooks/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Font from '../../../assets/fonts/font';
import SweetAlert from "react-native-sweet-alert"
import Loading from '../../../components/Loading';

const Create = ({route, navigation}) => {
    const {user} = route.params
    const [text, setText] = useState("");
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const firestore = FIRESTORE_DB
    const [loading, setLoading] = useState(false);

    const addPost = async (userId, text) => {
        try {
            setLoading(true)
            await addDoc(collection(firestore, 'posts'), {
                userId: userId,
                text: text,
                timestamp: serverTimestamp(),
            });
            navigation.goBack();
            SweetAlert.showAlertWithOptions({
                title: 'Sukses',
                subTitle: 'Anda berhasil membuat postingan di Forum',
                confirmButtonTitle: 'OK',
                style: 'success',
                cancellable: false,
            });
            console.log('Post added!');
        } catch (error) {
            console.error("Error adding post: ", error);
        } finally{
            setLoading(false)
        }
    };
    const onSubmitPressed = (userId, textSubmit) => {
        if (textSubmit.trim()) {
          addPost(userId, textSubmit);
          setText(""); // Clear the input after submission
        } else {
          console.log("Text cannot be empty");
        }
    };
  return (
    <Container>
        <Loading visible={loading}/>
        <Header title={"Buat Postingan"}/>
        <View style={{flex:1}}>
            <Text style={styles.label}>Masukkan postingan Anda:</Text>
            <TextInput
                style={[styles.textArea, {width:windowWidth*0.8, height:windowHeight*0.3}]}
                multiline={true}
                numberOfLines={4}
                placeholder="Ketik di sini..."
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity onPress={()=>onSubmitPressed(user.uid, text)} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05}]}>
                <Text style={styles.buttonText}>Kirimkan</Text>
            </TouchableOpacity>
        </View>
    </Container>
  )
}

export default Create

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily:Font.font.semibold,
        color:"white"
    },
    textArea: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        textAlignVertical: 'top', // ini membuat teks dimulai dari atas
        backgroundColor:'white',
        color:'black',
        fontFamily:Font.font.regular,
        fontSize:15,
        borderRadius:10
    },
    button:{
        backgroundColor:"#FFD911",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        borderRadius:10
    },
    buttonText:{
        fontFamily:Font.font.bold,
        color: "black",
        fontSize:15,
    }
})