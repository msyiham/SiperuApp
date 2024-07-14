import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font';
import Header from '../../../components/Header';
import * as Progress from 'react-native-progress';
const Excercise3 = ({navigation, route}) => {
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const {user, onUpdate} = route.params
    const [questions, setQuestions] = useState([
      {
        id: 1,
        answerDescription:"Sifat periodik adalah sifat yang berubah secara berulang (periodik) dalam tabel periodik. Sifat periodik unsur meliputi energi ionisasi, jari-jari atom, keelektronegatifan, dan afinitas. Warna tidak termasuk dalam sifat periodik karena tidak berubah secara sistematis dalam tabel periodik.",
        question: "Sifat unsur yang tidak tergolong sifat periodik adalah ...",
        choices: [
          { id: 1, text: "energi ionisasi" },
          { id: 2, text: "jari-jari atom" },
          { id: 3, text: "keelektronegatifan" },
          { id: 4, text: "afinitas elektron" },
          { id: 5, text: "warna" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 2,
        answerDescription:"Kereaktifan unsur-unsur alkali meningkat seiring dengan bertambahnya jari-jari atom. Jari-jari atom yang lebih besar membuat elektron valensi lebih mudah lepas, sehingga meningkatkan kereaktifan.",
        question: "Bertambahnya kereaktifan unsur-unsur alkali menurut urutan Li, Na, dan K disebabkan oleh bertambahnya",
        choices: [
          { id: 1, text: "jumlah elektron" },
          { id: 2, text: "nomor atom" },
          { id: 3, text: "jari-jari atom" },
          { id: 4, text: "jumlah proton" },
          { id: 5, text: "massa atom" },
        ],
        correctAnswerId: 3,
      },
      {
        id: 3,
        answerDescription:"Dalam satu periode, dari kiri ke kanan, jari-jari atom cenderung berkurang karena peningkatan muatan inti menarik elektron lebih dekat ke inti.",
        question: "Dalam urutan unsur 80, 9F, dan 10Ne, jari-jari atom akan ...",
        choices: [
          { id: 1, text: "bertambah" },
          { id: 2, text: "berkurang" },
          { id: 3, text: "sama besar" },
          { id: 4, text: "bertambah lalu berkurang" },
          { id: 5, text: "berkurang lalu bertambah" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 4,
        answerDescription:"Unsur dengan keelektronegatifan terbesar adalah Fluor (F), yang memiliki konfigurasi elektron 2, 7.",
        question: "Konfigurasi elektron dari unsur yang memiliki keelektronegatifan terbesar adalah",
        choices: [
          { id: 1, text: "2, 5" },
          { id: 2, text: "2, 7" },
          { id: 3, text: "2, 8" },
          { id: 4, text: "2, 8, 1" },
          { id: 5, text: "2, 8, 8" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 5,
        answerDescription:" Kalium (K) adalah logam alkali yang memiliki sifat logam paling kuat. Logam alkali umumnya memiliki sifat logam yang lebih kuat dibandingkan dengan logam-logam dari golongan lain yang disebutkan (Aluminium, Natrium, Magnesium, Kalsium).",
        question: "Sifat logam yang paling kuat di antara unsur-unsur berikut dimiliki oleh ..",
        choices: [
          { id: 1, text: "aluminium" },
          { id: 2, text: "natrium" },
          { id: 3, text: "magnesium" },
          { id: 4, text: "kalsium" },
          { id: 5, text: "kalium" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 6,
        answerDescription:"Helium memiliki energi ionisasi terbesar karena memiliki jumlah elektron yang sangat sedikit dan inti yang sangat kuat, sehingga sulit untuk melepas elektronnya.",
        question: "Energi ionisasi terbesar dimiliki oleh",
        choices: [
          { id: 1, text: "helium" },
          { id: 2, text: "neon" },
          { id: 3, text: "natrium" },
          { id: 4, text: "argon" },
          { id: 5, text: "kalium" },
        ],
        correctAnswerId: 1,
      },
      {
        id: 7,
        answerDescription:"Dalam satu golongan, semakin kecil nomor atom, semakin besar energi ionisasi. Hal ini karena elektron terluar berada lebih dekat ke inti dan lebih sulit dilepaskan.",
        question: "Jika nomor atom dalam satu golongan makin kecil, maka yang bertambah besar adalah ...",
        choices: [
          { id: 1, text: "jari-jari atom" },
          { id: 2, text: "massa atom" },
          { id: 3, text: "jumlah elektron valensi" },
          { id: 4, text: "energi ionisasi" },
          { id: 5, text: "sifat logam" },
        ],
        correctAnswerId: 4,
      },
      {
        id: 8,
        answerDescription:"Keelektronegatifan adalah kecenderungan suatu atom untuk menarik elektron dalam ikatan kimia.",
        question: "Keelektronegatifan suatu unsur adalah sifat yang menyatakan",
        choices: [
          { id: 1, text: "besarnya energi yang diperlukan untuk melepas 1 elektron pada pembentukan ion positif" },
          { id: 2, text: "besarnya energi yang diperlukan untuk menyerap 1 elektron pada pembentukan ion negatif" },
          { id: 3, text: "besarnya energi yang dibebaskan pada penyerapan 1 elektron untuk membentuk ion negatif" },
          { id: 4, text: "besarnya kecenderungan menarik elektron pada suatu ikatan" },
          { id: 5, text: ". besarnya kecenderungan menarik elektron untuk membentuk ion negatif" },
        ],
        correctAnswerId: 4,
      },
      {
        id: 9,
        answerDescription:"Dalam periode kedua, titik cair dan titik didih naik bertahap hingga mencapai puncak pada golongan IVA (karbon), kemudian turun drastis hingga mencapai titik terendah pada golongan VIIIA (neon).",
        question: "Titik cair dan titik didih unsur-unsur periode kedua",
        choices: [
          { id: 1, text: "naik secara beraturan sepanjang periode" },
          { id: 2, text: "naik bertahap sampai golongan IIIA, kemudian turun drastis" },
          { id: 3, text: "naik bertahap sampai golongan IVA, kemudian turun teratur" },
          { id: 4, text: "naik bertahap sampai golongan IVA, kemudian turun drastis" },
          { id: 5, text: "turun secara beraturan sepanjang periode" },
        ],
        correctAnswerId: 4,
      },
      {
        id: 10,
        answerDescription:"Dalam tabel periodik, titik leleh dan titik didih logam cenderung meningkat dari atas ke bawah, sedangkan untuk nonlogam cenderung berkurang.",
        question: "Dalam sistem periodik dari atas ke bawah, titik leleh dan titik didih ...",
        choices: [
          { id: 1, text: "logam dan nonlogam bertambah" },
          { id: 2, text: "logam dan nonlogam berkurang" },
          { id: 3, text: "logam bertambah, dan nonlogam berkurang" },
          { id: 4, text: "logam berkurang, dan nonlogam bertambah" },
          { id: 5, text: "logam dan nonlogam tidak teratur perubahannya" },
        ],
        correctAnswerId: 3,
      },
      // Add more questions as needed
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
      questions.map(() => null)
    );
  
  
    const handleBack = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
    
    const handleSave = () => {
      // Menghitung total point yang terkumpul
      let totalPoints = 0;
      for (let i = 0; i < questions.length; i++) {
        if (
          selectedAnswers[i] &&
          selectedAnswers[i].id === questions[i].correctAnswerId
        ) {
          totalPoints++;
        }
      }
    
      if (currentQuestionIndex === questions.length - 1) {
        // Navigasi ke halaman baru untuk menampilkan total point dan total soal
        navigation.replace("ExerciseResult", {
          exerciseType: 3,
          totalPoints,
          selectedAnswers,
          questions,
          user:user,
          onUpdate
        });
      }else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handleBoxPress = (choice) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = choice;
      setSelectedAnswers(updatedAnswers);
    };
  
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const progress = (currentQuestionIndex + 1) / questions.length;
  return (
    <Container>
        <Header title={"Latihan Soal 3"} />
      <ScrollView style={{marginTop:30}}>
        <Text style={styles.pageText}>
            Soal no <Text style={{fontWeight:'bold'}}>{currentQuestionIndex + 1}</Text>/ <Text style={{fontWeight:'bold'}}>{questions.length}</Text>
        </Text>
        <View style={{marginBottom:15}}>
            <Progress.Bar color='#326EFE' unfilledColor='#FFFFFF' progress={progress} width={width*0.9} />
        </View>
        <View style={[styles.card, { width: width * 0.9, height: height * 0.65 }]}>
            <ScrollView>
                <View style={{ marginTop: width * 0.02 }}>
                {currentQuestion.image && (
                    <ScrollView horizontal >
                    <View style={{width:width*1.2, height:height*0.3}}>
                        <Image source={currentQuestion.image} style={{ height: height * 0.25, width: width*1.2 }} resizeMode="stretch" />
                    </View>
                    
                    </ScrollView>
                )}
                <Text style={styles.question}>{currentQuestion.question}</Text>
                <View style={[styles.boxesContainer, { marginBottom: height * 0.02 }]}>
                {currentQuestion.choices.map((choice) => (
                <View key={choice.id} style={{ width: width * 0.76, height: height * 0.07, flexDirection: 'row' }}>
                    <View style={{ width: width * 0.15 }}>
                    <TouchableOpacity
                        style={[
                        styles.box,
                        selectedAnswer === choice ? styles.selectedBox : null,
                        { width: width * 0.1, height: width * 0.1 },
                        ]}
                        onPress={() => handleBoxPress(choice)}
                    >
                        <Text style={{fontFamily:Font.font.bold, color:'black'}}>
                        {choice.id === 1 ? 'A.' : 
                        choice.id === 2 ? 'B.' : 
                        choice.id === 3 ? 'C.' : 
                        choice.id === 4 ? 'D.' : 
                        choice.id === 5 ? 'E.' : ''}
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.answer}>
                    {choice.text}
                    </Text>
                </View>
                ))}
                </View>
                </View>
            </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
            {currentQuestionIndex > 0 && (
                <TouchableOpacity
                style={[styles.button, { width: width * 0.25, height: height * 0.05 }]}
                onPress={handleBack}
                >
                <Text style={styles.buttonText}>Kembali</Text>
                </TouchableOpacity>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
                <TouchableOpacity
                style={[styles.button, { width: width * 0.35, height: height * 0.05 }]}
                onPress={handleNext}
                >
                <Text style={styles.buttonText}>Selanjutnya</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                style={[styles.button, { width: width * 0.25, height: height * 0.05 }]}
                onPress={handleSave}
                >
                <Text style={styles.buttonText}>Simpan</Text>
                </TouchableOpacity>
            )}
            </View>
      </ScrollView>
    </Container>
  )
}

export default Excercise3

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        margin: 5,
        textAlignVertical: "center",
        textAlign: "center",
        fontFamily: Font.font.bold,
        color: "black",
    },
    titleBox: {
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    question: {
        fontSize: 15,
        color: "black",
        marginBottom: 20,
        textAlign:'justify',
        margin: 5,
        fontFamily: Font.font.semibold
    },
    boxesContainer: {
        justifyContent: "space-between",
        alignItems:'center'
    },
    box: {
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderRadius: 25,
        padding: 3,
    },
    selectedBox: {
        backgroundColor: "#FFD911",
    },
    answerFind: {
        color: "black",
        fontSize: 16,
    },
    pageText: {
        color: "#ffff",
        fontSize: 15,
        marginBottom:5,
        textAlign:'center',
        fontFamily: Font.font.bold
    },
    answer: {
        color: "black",
        fontSize: 14,
        fontFamily: Font.font.regular,
    },
    selectedAnswer: {
        color: "white",
        fontSize: 14,
        fontFamily: Font.font.bold
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#FFD911",
        marginTop: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
    },
    buttonText: {
        fontSize: 15,
        color: "black",
        fontFamily: Font.font.regular,
    },
})