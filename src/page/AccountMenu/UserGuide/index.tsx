import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font'
const UserGuide = () => {
  return (
    <Container>
    <Header title="Petunjuk Penggunaan"/>
    <ScrollView style={{flex:1}}>
        <View style={{padding:10, marginBottom:10}}>
            <Text style={styles.textBold}>Augmented Reality (AR)</Text>
            <Text style={styles.text}>1. Buka aplikasi SI PERU pada perangkat Anda{'\n'}2. Pilih menu Augmented Reality{'\n'}3. Ikuti petunjuk di layar untuk mengizinkan akses kamera{'\n'}4. Arahkan kamera ke marker AR dalam buku{'\n'}5. Tunggu beberapa detik hingga model 3D dari unsur tersebut muncul pada layar{'\n'}6. Gunakan jari Anda untuk memutar, memperbesar atau memperkecil objek 3D dari tiap unsur</Text>
            <Text style={styles.textBold}>Artificial Intelligence (AI)</Text>
            <Text style={styles.text}>1. Buka aplikasi SI PERU pada perangkat Anda{'\n'}2. Pilih menu RoboPeru (Artificial Intelligence){'\n'}3. Masukkan pertanyaan seputar materi sistem periodik unsur{'\n'}4. Tunggu beberapa detik hingga jawaban muncul{'\n'}5. Berikan feedback apabila jawaban dirasa kurang tepat</Text>
            <Text style={styles.textBold}>Forum Diskusi</Text>
            <Text style={styles.text}>1. Buka aplikasi SI PERU pada perangkat Anda{'\n'}2. Pilih menu forum diskusi{'\n'}3. Ketik apa yang ingin kamu katakan{'\n'}4. Kalian juga bisa saling berdiskusi sesama pengguna SI PERU</Text>
            <Text style={styles.textBold}>Tes Gaya Belajar</Text>
            <Text style={styles.text}>1. Terdapat beberapa pertanyaan dan kamu diminta untuk menentukan tingkat kecocokan dari tidak cocok hingga sangat cocok berdasarkan dengan keadaanmu saat ini{'\n'}2. Temukan posisi senyaman mungkin dan pastikan tidak ada kegiatan lain yang sedang kamu lakukan saat menjawab tes{'\n'}3. Jawablah setiap pertanyaan dengan jujur. Setiap soal dalam tes ini hanya bisa kamu kerjakan satu kali, jadi kerjakanlah dengan teliti.</Text>
        </View>
    </ScrollView>
    </Container>
  )
}

export default UserGuide

const styles = StyleSheet.create({
    textBold:{
        fontFamily:Font.font.bold,
        fontSize:16,
        color:"white",
        textAlign:"center"
    },
    text:{
        fontFamily:Font.font.regular,
        fontSize:15,
        color:"white",
        marginBottom:15,
        marginTop:5,
        letterSpacing:2
    },
})