import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font';
import Header from '../../../components/Header';
import * as Progress from 'react-native-progress';
const Excercise2 = ({navigation, route}) => {
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const {user, onUpdate} = route.params
    const [questions, setQuestions] = useState([
      {
        id: 1,
        answerDescription:"onfigurasi elektron 2, 8, 18, 7 menunjukkan bahwa unsur tersebut memiliki 7 elektron di kulit terluar (valensi). Unsur dengan 7 elektron valensi terletak pada golongan VIIA (17), yang termasuk halogen.",
        question: "Suatu unsur mempunyai konfigurasi elektron 2, 8, 18, 7. Unsur tersebut terletak pada golongan ..",
        choices: [
          { id: 1, text: "IA" },
          { id: 2, text: "IIA" },
          { id: 3, text: "VA" },
          { id: 4, text: "VIA" },
          { id: 5, text: "VII A" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 2,
        answerDescription:"Ion Sr2+ kehilangan 2 elektron dari konfigurasi atom netralnya. Konfigurasi elektron untuk atom netral Sr adalah 2, 8, 18, 18, 8, 2, menunjukkan bahwa Sr berada di periode 5 (karena memiliki 5 kulit elektron dalam konfigurasi atom netral).",
        question: "Ion Sr2+ mempunyai konfigurasi elektron 2, 8, 18, 8. Unsur tersebut terletak pada periode...",
        choices: [
          { id: 1, text: "3" },
          { id: 2, text: "4" },
          { id: 3, text: "5" },
          { id: 4, text: "6" },
          { id: 5, text: "7" },
        ],
        correctAnswerId: 3,
      },
      {
        id: 3,
        answerDescription:"Konfigurasi elektron untuk atom netral Ca adalah 2, 8, 8, 2. Setelah kehilangan 2 elektron, konfigurasinya menjadi 2, 8, 8. Atom Ca dengan konfigurasi ini terletak pada golongan IIA dan periode 4.",
        question: "Kation Ca2+ memiliki konfigurasi elektron 2, 8, 8. Atom unsur tersebut terletak pada...",
        choices: [
          { id: 1, text: "golongan IIA periode 3" },
          { id: 2, text: "golongan IIA periode 4" },
          { id: 3, text: "golongan IIIA periode 4" },
          { id: 4, text: "golongan IVA periode 2" },
          { id: 5, text: "golongan VIA periode 3" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 4,
        answerDescription:"Jika nomor massa adalah 80 dan jumlah neutron adalah 45, maka jumlah proton adalah 80 - 45 = 35. Unsur dengan nomor atom 35 adalah Brom (Br). Brom terletak pada golongan VIIA dan periode 4.",
        question: "Suatu atom mempunyai nomor massa 80 dan memiliki jumlah neutron 45. Unsur tersebut terletak pada ...",
        choices: [
          { id: 1, text: "golongan IA periode 6" },
          { id: 2, text: "golongan IIA periode 6" },
          { id: 3, text: "golongan VIA periode 1" },
          { id: 4, text: "golongan VIA periode 2" },
          { id: 5, text: "golongan VIIA periode 4" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 5,
        answerDescription:"Jika neutron sama dengan proton dan nomor massa adalah 40, maka jumlah proton adalah 40/2 = 20. Unsur dengan nomor atom 20 adalah Kalsium (Ca). Kalsium terletak pada golongan IIA dan periode 4.",
        question: "Suatu atom memiliki neutron yang jumlahnya sama dengan protonnya. Atom tersebut mempunyai nomor massa 40. Atom tersebut terletak pada ...",
        choices: [
          { id: 1, text: "golongan IIA periode 4" },
          { id: 2, text: "golongan IVA periode 2" },
          { id: 3, text: "golongan IVA periode 5" },
          { id: 4, text: "golongan VA periode 4" },
          { id: 5, text: "golongan VA periode 5" },
        ],
        correctAnswerId: 1,
      },
      {
        id: 6,
        answerDescription:"Unsur B dan E terletak dalam golongan yang sama karena nomor atomnya 12 (Magnesium) dan 19 (Kalium) menunjukkan bahwa keduanya berada dalam golongan 2A (alkali tanah).",
        question: "Dari data tersebut unsur-unsur yang terletak dalam satu golongan adalah",
        choices: [
          { id: 1, text: "A dan C" },
          { id: 2, text: "A dan D" },
          { id: 3, text: "B dan C" },
          { id: 4, text: "B dan D" },
          { id: 5, text: "B dan E" },
        ],
        image:require("../../../assets/img/EXERCISE/Picture1.png"),
        correctAnswerId: 5,
      },
      {
        id: 7,
        answerDescription:"Unsur dengan nomor atom 12 (B), 17 (D), dan 19 (E) berada dalam periode yang sama, yaitu periode 3. Dalam tabel periodik, periode menunjukkan jumlah kulit elektron.",
        question: "Dari tabel tersebut unsur yang terletak dalam satu periode adalah ...",
        choices: [
          { id: 1, text: "A, B, C" },
          { id: 2, text: "A, B, D" },
          { id: 3, text: "B, C, D" },
          { id: 4, text: "B, D, E" },
          { id: 5, text: "C, D, E" },
        ],
        image:require("../../../assets/img/EXERCISE/Picture1.png"),
        correctAnswerId: 4,
      },
      {
        id: 8,
        answerDescription:"Karena nomor atom 19 adalah Kalium (K), yang berada dalam golongan alkali (golongan 1A).",
        question: "Dari tabel di atas atom yang terletak pada golongan alkali adalah ...",
        choices: [
          { id: 1, text: "A" },
          { id: 2, text: "B" },
          { id: 3, text: "C" },
          { id: 4, text: "D" },
          { id: 5, text: "E" },
        ],
        image:require("../../../assets/img/EXERCISE/Picture1.png"),
        correctAnswerId: 1,
      },
      {
        id: 9,
        answerDescription:"Unsur dengan nomor atom 12 (Magnesium) dan 19 (Kalium) cenderung kehilangan elektron dan membentuk ion positif (kation).",
        question: "Dari tabel di atas atom yang cenderung bermuatan positif adalah",
        choices: [
          { id: 1, text: "A dan C" },
          { id: 2, text: "A dan D" },
          { id: 3, text: "B dan C" },
          { id: 4, text: "B dan D" },
          { id: 5, text: "B dan E" },
        ],
        image:require("../../../assets/img/EXERCISE/Picture1.png"),
        correctAnswerId: 5,
      },
      {
        id: 10,
        answerDescription:"Atom dengan 4 kulit elektron dan 6 elektron valensi adalah unsur dengan nomor atom 34 (Selenium, Se) yang berada dalam periode 4 dan golongan 6A. Jika jumlah neutron adalah 45, maka nomor massa = nomor atom + jumlah neutron = 34 + 45 = 79.",
        question: "Suatu atom memiliki 4 kulit elektron dan 6 elektron valensi. Jika atom tersebut memiliki jumlah neutron 45, unsur tersebut memiliki nomor massa ...",
        choices: [
          { id: 1, text: "24" },
          { id: 2, text: "34" },
          { id: 3, text: "45" },
          { id: 4, text: "69" },
          { id: 5, text: "79" },
        ],
        correctAnswerId: 5,
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
          exerciseType: 2,
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
        <Header title={"Latihan Soal 2"} />
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
                    <View style={{width:width*0.6,}}>
                      <Text style={styles.answer}>
                        {choice.text}
                      </Text>
                    </View>
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

export default Excercise2

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