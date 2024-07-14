import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font';
import Header from '../../../components/Header';
import * as Progress from 'react-native-progress';
const Excercise1 = ({navigation, route}) => {
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const {user, onUpdate} = route.params
    const [questions, setQuestions] = useState([
      {
        id: 1,
        answerDescription:"Dmitri Mendeleev adalah ilmuwan yang menyusun tabel periodik berdasarkan kenaikan massa atom dan sifat kimia unsur-unsur. Tabel periodiknya kemudian dikembangkan lebih lanjut menjadi tabel periodik modern yang kita gunakan saat ini, yang diatur berdasarkan nomor atom.",
        question: "Sistem periodik unsur yang kita pakai sekarang merupakan pengembangan dari sistem periodik unsur yang disusun oleh",
        choices: [
          { id: 1, text: "Dobereiner" },
          { id: 2, text: "Newlands" },
          { id: 3, text: "Dalton" },
          { id: 4, text: "Mendeleyev" },
          { id: 5, text: "Moseley" },
        ],
        correctAnswerId: 4, // ID of the correct answer choice
      },
      {
        id: 2,
        answerDescription:"Johann Wolfgang Döbereiner mengemukakan Hukum Triade, yaitu pengelompokkan unsur-unsur dalam kelompok tiga (triade) berdasarkan kemiripan sifat kimia dan massa atom relatif yang berdekatan.",
        question: "Hukum Triade merupakan salah satu cara pengelompokkan unsur yang dikemukakan oleh..",
        choices: [
          { id: 1, text: "Mendeleyev" },
          { id: 2, text: "Dobereiner" },
          { id: 3, text: "Newlands" },
          { id: 4, text: "Lothar Meyer" },
          { id: 5, text: "Moseley" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 3,
        answerDescription:"ohn Newlands mengemukakan Hukum Oktaf, yang menyatakan bahwa unsur-unsur yang disusun berdasarkan kenaikan massa atom relatifnya menunjukkan kemiripan sifat setiap delapan unsur, mirip dengan oktaf dalam musik",
        question: "Apabila unsur-unsur dikelompokkan berdasarkan kenaikan massa atom relatifnya, unsur nomor 8 mempunyai kemiripan sifat dengan unsur ke-1. Pengelompokkan ini dikemukakan oleh ...",
        choices: [
          { id: 1, text: "Dobereiner" },
          { id: 2, text: "Newlands" },
          { id: 3, text: "Lothar Meyer" },
          { id: 4, text: "Moseley" },
          { id: 5, text: "Mendeleyev" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 4,
        answerDescription:"Mendeleev menyusun tabel periodiknya berdasarkan kenaikan massa atom relatif (berat atom) dan memperhatikan kemiripan sifat kimia. Meskipun tabel ini memiliki beberapa anomali karena penggunaan massa atom, dasar pengelompokkan ini kemudian diperbaiki dengan penggunaan nomor atom oleh Henry Moseley.",
        question: "Mendeleyev menyusun sistem periodik berdasarkan ..",
        choices: [
          { id: 1, text: "Kenaikan nomor massa" },
          { id: 2, text: "Kenaikan berat atom" },
          { id: 3, text: "Sifat logam dan non logam" },
          { id: 4, text: "Kenaikan nomor atom" },
          { id: 5, text: "Sifat fisika atom" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 5,
        answerDescription:"Salah satu kelemahan utama dari tabel periodik Mendeleev adalah adanya ruang kosong yang ditinggalkan untuk unsur-unsur yang belum ditemukan pada masanya",
        question: "Kelemahan sistem periodik Mendeleyev adalah",
        choices: [
          { id: 1, text: "Tidak dibedakannya golongan dalam SPU Mendeleyev" },
          { id: 2, text: "Terdapat banyak ruang kosong karena unsurnya belum ditemukan" },
          { id: 3, text: "Tidak dibedakannya fase pada suhu kamar" },
          { id: 4, text: "Tidak dibedakannya padatan dan cairan" },
          { id: 5, text: "Tidak terdapat semua informasi yang diperlukan" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 6,
        answerDescription:"Tabel periodik modern disusun berdasarkan kenaikan nomor atom (jumlah proton dalam inti atom) dan kemiripan sifat kimia dari unsur-unsur tersebut. Pengelompokan ini memastikan bahwa unsur-unsur dengan sifat kimia yang mirip berada dalam satu golongan yang sama.",
        question: "Susunan berkala unsur-unsur saat ini dibuat berdasarkan ...",
        choices: [
          { id: 1, text: "Sifat kimia unsur-unsur" },
          { id: 2, text: "Sifat fisika unsur-unsur" },
          { id: 3, text: "Susunan elektron unsur-unsur" },
          { id: 4, text: "Berat atom unsur-unsur" },
          { id: 5, text: "Nomor atom dan kemiripan sifat" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 7,
        answerDescription:"John Newlands' hukum oktaf hanya berlaku untuk unsur-unsur dengan nomor atom kecil, dan menjadi tidak akurat untuk unsur-unsur dengan nomor atom yang lebih besar karena sifat kimia unsur tidak selalu terulang setiap delapan unsur setelah unsur-unsur tersebut.",
        question: "Kelemahan penyusunan atom dengan teori oktaf adalah ...",
        choices: [
          { id: 1, text: "Urutan kenaikan nomor atom tidak kontinu" },
          { id: 2, text: "Urutan kenaikan nomor massa tidak kontinu" },
          { id: 3, text: "Terdapat beberapa atom yang memiliki massa lebih tinggi berada pada urutan yang lebih rendah" },
          { id: 4, text: "Beberapa unsur yang menurut hitungan terdapat pada satu kelompok, tetapi sifatnya tidak sama" },
          { id: 5, text: "Sistem oktaf hanya berlaku pada unsur-unsur dengan nomor massa kecil" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 8,
        answerDescription:"Hukum Triade yang dikemukakan oleh Döbereiner menyatakan bahwa dalam suatu triade, yaitu kelompok tiga unsur yang memiliki sifat kimia yang mirip, massa atom unsur yang di tengah kira-kira merupakan rata-rata dari massa atom unsur yang lebih ringan dan lebih berat.",
        question: "Hukum Triade menyatakan bahwa ...",
        choices: [
          { id: 1, text: "Dalam satu golongan, unsur-unsur mempunyai kemiripan sifat" },
          { id: 2, text: "Suatu triade selalu terdiri atas tiga macam unsur yang sama" },
          { id: 3, text: "Jika unsur disusun menurut sifatnya, selalu ada tiga unsur yang sifatnya mirip yang disebut triade" },
          { id: 4, text: "Jika unsur-unsur disusun menurut beratnya, sifat unsur akan terulang pada unsur kedelapan" },
          { id: 5, text: "Dalam suatu triade massa rata-rata unsur yang ringan dan berat mendekati massa unsur yang di tengah" },
        ],
        correctAnswerId: 5,
      },
      {
        id: 9,
        answerDescription:"Salah satu kekurangan dari tabel periodik Mendeleev adalah adanya ruang kosong yang ditinggalkan untuk unsur-unsur yang belum ditemukan pada masanya. Mendeleev dengan cerdik memprediksi keberadaan dan sifat dari unsur-unsur ini, banyak di antaranya kemudian ditemukan sesuai prediksinya.",
        question: "Berikut kekurangan pada pengelompokkan unsur yang dikemukakan oleh Mendeleev adalah",
        choices: [
          { id: 1, text: "Pengelompokkan masih terlalu umum" },
          { id: 2, text: "Pengelompokan kurang efisien dengan adanya beberapa unsur lain dan tidak termasuk dalam kelompok padahal sifatnya sama dengan unsur dalam kelompok tersebut." },
          { id: 3, text: "Ditemukan beberapa oktaf yang isinya lebih dari delapan unsur" },
          { id: 4, text: "Terdapat banyak ruang kosong dalam tabel karena banyak unsur yang belum diketahui" },
          { id: 5, text: "Penggolongan tidak cocok untuk unsur yang massa atomnya sangat besar." },
        ],
        correctAnswerId: 4,
      },
      {
        id: 10,
        answerDescription:"Pada sistem periodik modern, unsur-unsur dalam satu golongan disusun berdasarkan kemiripan sifat, jumlah kulit atom, kenaikan nomor atom, dan jumlah elektron valensi. Nomor massa tidak digunakan sebagai dasar pengelompokan unsur dalam golongan yang sama.",
        question: "Pada sistem periodik modern unsur-unsur yang berada dalam satu golongan disusun berdasarkan hal-hal berikut, kecuali",
        choices: [
          { id: 1, text: "Kemiripan sifat" },
          { id: 2, text: "Jumlah kulit atom" },
          { id: 3, text: "Kenaikan nomor atom" },
          { id: 4, text: "Kenaikan nomor massa" },
          { id: 5, text: "Jumlah elektron valensi" },
        ],
        correctAnswerId: 4,
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
          exerciseType: 1,
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
        <Header title={"Latihan Soal 1"} />
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
                <View key={choice.id} style={{ width: width * 0.76, flexDirection: 'row' }}>
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

export default Excercise1

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