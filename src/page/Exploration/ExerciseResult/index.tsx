import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import { FIRESTORE_DB } from '../../../hooks/firebase'
import Loading from '../../../components/Loading'
import SweetAlert from 'react-native-sweet-alert';
import Font from '../../../assets/fonts/font'
import { collection, FieldValue, doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
const ExerciseResult = ({navigation, route}) => {
    const { totalPoints, selectedAnswers, questions, user, onUpdate, exerciseType} = route.params;
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const [loading, setLoading] = useState(false);
      const saveTotalPointToFirestore = async (uid) => {
        try {
          setLoading(true);
          const firestore = FIRESTORE_DB;
          const docRef = doc(firestore, "users", uid);
      
          // Check if the document exists in Firestore for the given UID
          const docSnapshot = await getDoc(docRef);
      
          if (docSnapshot.exists()) {
            const exerciseField = `exercise${exerciseType}`; // Build field name dynamically
            await updateDoc(docRef, {
              [exerciseField]: totalPoints,
            });
          }
    
          const updatedUser = {
            ...user,
            [`exercise${exerciseType}`]: totalPoints,
          };
    
          if (typeof onUpdate === 'function') {
            onUpdate(updatedUser);
          } else {
            console.error("onUpdate is not a function or is undefined");
          }
    
          SweetAlert.showAlertWithOptions({
            title: 'Selamat',
            subTitle: `Anda Berhasil Menyelesaikan Latihan ${exerciseType}`, // Menyesuaikan pesan SweetAlert
            confirmButtonTitle: 'OK',
            style: 'success',
            cancellable: false,
          });
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainApp', params: { user: updatedUser } }],
        });
        } catch (error) {
          console.error("Error saving total points to Firestore:", error);
        }finally{
          setLoading(false);
        }
      };
  return (
    <Container>
          <Loading visible={loading}/>
          <ScrollView style={{ flex: 1, alignContent:'center', marginTop:20, }}>
            <Text style={styles.title}>Total Skormu!</Text>
            <Text style={styles.point}>{totalPoints*10}/100</Text>
            <View style={[styles.resultContainer, {width:width}]}>
              <Text style={styles.resultText}>Pembahasan:</Text>
              <View style={{flex:1}}>
                  {questions.map((question, index) => {
                  const selectedAnswer = selectedAnswers[index];
                  if (
                      selectedAnswer &&
                      selectedAnswer.id !== question.correctAnswerId
                  ) {
                      return (
                      <View key={question.id} style={[styles.questionContainer, {marginBottom: height*0.03, width:width*0.9}]}>
                          <Text style={styles.question}>{question.id}. {question.question}</Text>
                          <Text style={styles.questionCheck}>Jawaban anda <Text style={{color:'red'}}>Salah</Text></Text>
                          <Text style={styles.correctAnswer}>
                          Jawaban yang Benar: {question.choices.find(choice => choice.id === question.correctAnswerId)?.text}
                          </Text>
                          <Text style={[styles.correctAnswer, {marginTop:10}]}>
                            Keterangan
                          </Text>
                          <Text style={styles.answerDescription}>
                            {question.answerDescription}
                          </Text>
                      </View>
                      );
                  }else if(                      
                    selectedAnswer &&
                    selectedAnswer.id == question.correctAnswerId
                  ) {
                    return (
                      <View key={question.id} style={[styles.questionContainer, {marginBottom: height*0.03, width:width*0.9}]}>
                          <Text style={styles.question}>{question.id}. {question.question}</Text>
                          <Text style={styles.correctAnswer}>
                          Jawabannya: {question.choices.find(choice => choice.id === question.correctAnswerId)?.text}
                          </Text>
                          <Text style={styles.questionCheck}>Jawaban anda <Text style={{color:'green'}}>Benar</Text></Text>
                      </View>
                      );
                  }
                  return null;
                  })}
              </View>

            </View>
            <TouchableOpacity
                style={[styles.button, { width: width * 0.3, height: height * 0.05, marginTop: height*0.05 }]}
                onPress={() => {
                    const uid = user.uid;
                    saveTotalPointToFirestore(uid);
                }}
            >
                <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
          </ScrollView>
    </Container>
  )
}

export default ExerciseResult

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
        fontFamily:Font.font.bold,
        color:"white"
    },
    titleBox: {
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        margin:10,
        fontSize: 20,
        color:'#C9B8A8',
        textAlign:'center',
        marginBottom: 10,
    },
    point: {
        fontSize: 48,
        textAlign:'center',
        fontFamily:Font.font.bold,
        color: "#FFD911",
    },
    resultContainer: {
        marginTop: 20,
        borderRadius: 10,
        padding: 5,
        alignItems:'center'
    },
    resultText: {
        fontSize: 18,
        fontFamily:Font.font.bold,
        marginBottom: 10,
        color:'white',
    },
    questionContainer: {
        padding: 5,
        borderRadius:10,
        backgroundColor:"white"
    },
    question: {
        fontSize: 16,
        marginBottom: 10,
        color:'black',
        fontFamily:Font.font.regular,
    },
    questionCheck: {
        fontSize: 15,
        marginBottom: 5,
        color:'black',
        fontFamily:Font.font.bold,
    },
    correctAnswer: {
        fontSize: 15,
        color:'black',
        fontFamily:Font.font.semibold,
    },
    answerDescription: {
        fontSize: 15,
        color:'black',
        fontFamily:Font.font.regular,
    },
    button: {
        backgroundColor: "#FFD911",
        marginTop: 5,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        marginBottom:20,
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 15,
        color: "black",
        fontWeight:'700'
    },
})