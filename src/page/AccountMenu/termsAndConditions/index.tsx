import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Font from '../../../assets/fonts/font'
const TermConditions = () => {
    const windowWidth = Dimensions.get('window').width;
    const handleEmailPress = () => {
        Linking.openURL('mailto:siperu27@gmail.com');
      };
  return (
    <Container>
        <Header title={"Syarat & Ketentuan"}/>
        <ScrollView>
            <View style={{width:windowWidth*0.9}}>
                <Text style={styles.title}>Hak Anda untuk menggunakan Aplikasi SI PERU</Text>
                <Text style={styles.text}>1. Penggunaan aplikasi{'\n'}Aplikasi ini dirancang untuk menyediakan konten dan sumber daya pendidikan bagi pengguna.{'\n'}{'\n'}2. Penafian jaminan{'\n'}Aplikasi dan kontennya disediakan "apa adanya" tanpa jaminan apa pun, baik yang tersurat maupun tersirat. {'\n'}SI PERU tidak menjamin keakuratan, keandalan, atau kelengkapan konten yang tersedia melalui Aplikasi.{'\n'}SI PERU tidak bertanggung jawab atas kesalahan atau kelalaian dalam konten Aplikasi atau atas tindakan apa pun yang diambil berdasarkan informasi yang disediakan.{'\n'}{'\n'}3. Batasan Tanggung Jawab{'\n'}SI PERU tidak akan bertanggung jawab atas kerusakan langsung, tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Aplikasi.{'\n'}SI PERU tidak akan bertanggung jawab atas kehilangan data, keuntungan, atau peluang bisnis.{'\n'}{'\n'}4. Perubahan terhadap ketentuan{'\n'}SI PERU berhak untuk mengubah Ketentuan ini kapan saja. Setiap perubahan akan berlaku segera setelah Ketentuan yang direvisi diposting di Aplikasi.{'\n'}Penggunaan Anda yang berkelanjutan terhadap Aplikasi setelah Ketentuan yang dimodifikasi diposting merupakan penerimaan Anda terhadap perubahan tersebut.{'\n'}{'\n'}5. Penghentian{'\n'}SI PERU dapat menangguhkan atau mengakhiri akses Anda ke Aplikasi kapan saja, dengan atau tanpa alasan, dan tanpa pemberitahuan.{'\n'}Setelah penghentian, hak dan lisensi yang diberikan kepada Anda dalam Ketentuan ini akan berakhir, dan Anda harus menghentikan semua penggunaan Aplikasi.{'\n'}Harap baca Ketentuan ini dengan cermat sebelum menggunakan Aplikasi. Dengan menggunakan Aplikasi, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Ketentuan ini.</Text>
                <Text style={styles.text}>
                    Jika Anda memiliki pertanyaan atau kekhawatiran tentang Ketentuan ini, silakan hubungi kami di{' '}
                    <Text style={[styles.text, styles.email]} onPress={handleEmailPress}>
                        siperu27@gmail.com
                    </Text>.
                </Text>

            </View>
        </ScrollView>
    </Container>
  )
}

export default TermConditions

const styles = StyleSheet.create({
    title:{
        fontFamily:Font.font.bold,
        fontSize:16,
        color:"white",
        textAlign:"center",
        marginVertical:10
    },
    text:{
        fontFamily:Font.font.regular,
        fontSize:15,
        color:"white",
        textAlign:"justify",
        marginBottom:15
    },
    email: {
        fontFamily:Font.font.bold,
        textDecorationLine: 'underline',
        
    },
})