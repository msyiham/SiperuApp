import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Font from '../../assets/fonts/font'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFetchBlob from 'rn-fetch-blob'
const Download = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const handleDownloadPress = async (itemName, itemUrl) => {
        try {
            const imageUrl = itemUrl; // Gunakan URL gambar yang diberikan sebagai parameter
            const outputPath = `${RNFetchBlob.fs.dirs.DownloadDir}/${itemName}.jpg`;
    
            const response = await RNFetchBlob.config({
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    title: itemName,
                    description: 'Tunggu hingga proses download selesai...',
                    mime: 'image/jpeg', // MIME type untuk file .jpg
                    path: outputPath,
                },
            }).fetch('GET', imageUrl);
    
            console.log('Image downloaded successfully');
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    const handleDownloadBookPress = async (itemName, itemUrl) => {
        try {
            const bookURL = itemUrl; // Gunakan URL gambar yang diberikan sebagai parameter
            const outputPath = `${RNFetchBlob.fs.dirs.DownloadDir}/${itemName}.pdf`;
    
            const response = await RNFetchBlob.config({
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    title: itemName,
                    description: 'Tunggu hingga proses download selesai...',
                    mime: 'application/pdf',
                    path: outputPath,
                },
            }).fetch('GET', bookURL);
    
            console.log('Image downloaded successfully');
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    
  return (
    <Container>
        <Header title="Unduhan"/>
        <View style={{flex:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>handleDownloadPress("Tabel Sistem Periodik Unsur", "https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/Tabel%20Sistem%20Periodik%20Unsur.jpg?alt=media&token=ec3bed38-9faa-4a4b-bcd9-7b2bbf5d15f2")} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                <Text style={styles.buttonText}>Unduh Tabel Sistem Periodik  </Text>
                <Ionicons name="download" color="black" size={27}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDownloadBookPress("Buku Diktat SI PERU", "https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/Buku%20Diktat%20SI%20PERU.pdf?alt=media&token=9e5898e1-9009-4f45-a897-6fb3d3430504")} style={[styles.button, {width:windowWidth*0.9, height:windowHeight*0.07, borderRadius:windowWidth*0.03}]}>
                <Text style={styles.buttonText}>Buku Diktat SI PERU  </Text>
                <Ionicons name="download" color="black" size={27}/>
            </TouchableOpacity>
        </View>
    </Container>
  )
}

export default Download

const styles = StyleSheet.create({
    button:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:5,
        borderColor:"#0641CD",
        marginBottom:10,
        flexDirection:'row'
    },
    buttonText: {
        color: 'black',
        fontFamily: Font.font.bold,
        fontSize: 15,
    },
})