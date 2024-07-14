import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Container from '../../../components/Container'
import Font from '../../../assets/fonts/font';
import Header from '../../../components/Header';
import * as Progress from 'react-native-progress';
const Test = ({navigation, route}) => {
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    const {user, onUpdate} = route.params
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Ketika saya mengoperasikan peralatan baru, saya umumnya:",
            choices: [
              { id: "a", text: "Membaca petunjuknya terlebih dahulu" },
              { id: "b", text: "Mendengarkan penjelasan dari seseorang yang sudah menggunakan sebelumnya" },
              { id: "c", text: "Saya langsung menggunakannya, saya bisa belajar ketika menggunakannya" },
            ],
          },
          {
            id: 2,
            question: "Ketika saya membutuhkan petunjuk perjalanan, saya biasanya:",
            choices: [
              { id: "a", text: "Melihat peta" },
              { id: "b", text: "Meminta petunjuk lisan" },
              { id: "c", text: "Mengikuti kehendak hati, dan mungkin menggunakan kompas" },
            ],
          },
          {
            id: 3,
            question: "Ketika saya memasak menu baru, saya suka:",
            choices: [
              { id: "a", text: "Mengikuti resep tertulis" },
              { id: "b", text: "Meminta penjelasan kepada seorang teman" },
              { id: "c", text: "Mengikuti insting, saya mencicipi ketika saya memasak" },
            ],
          },
          {
            id: 4,
            question: "Jika saya mengajarkan hal baru kepada seseorang, saya cenderung:",
            choices: [
              { id: "a", text: "Menuliskan suruhan untuk mereka" },
              { id: "b", text: "Memberikan penjelasan lisan" },
              { id: "c", text: "Memperagakan terlebih dulu, dan kemudian meminta mereka mempraktekkannya" },
            ],
          },
          {
            id: 5,
            question: "Saya cenderung untuk mengatakan:",
            choices: [
              { id: "a", text: "Lihat bagaimana saya melakukannya" },
              { id: "b", text: "Dengarkan penjelasan saya" },
              { id: "c", text: "Silakan dikerjakan" },
            ],
          },
          {
            id: 6,
            question: "Selama waktu luang saya paling suka:",
            choices: [
              { id: "a", text: "Pergi ke perpustakaan" },
              { id: "b", text: "Mendengarkan musik dan berbincang dengan teman saya" },
              { id: "c", text: "Berolahraga atau mengerjakan apa saja" },
            ],
          },
          {
            id: 7,
            question: "Ketika saya berbelanja, saya cenderung:",
            choices: [
              { id: "a", text: "Membayangkan seperti apa pakaian itu jika dikenakan" },
              { id: "b", text: "Mendiskusikannya dengan pegawai toko" },
              { id: "c", text: "Mencobanya langsung dan memutuskannya" },
            ],
          },
          {
            id: 8,
            question: "Ketika saya memilih liburan, saya biasanya:",
            choices: [
              { id: "a", text: "Membaca banyak brosur" },
              { id: "b", text: "Mendengarkan anjuran teman" },
              { id: "c", text: "Membayangkan akan seperti apa disana" },
            ],
          },
          {
            id: 9,
            question: "Jika saya membeli mobil baru, saya akan:",
            choices: [
              { id: "a", text: "Membaca ulasan dalam koran dan majalah" },
              { id: "b", text: "Membicarakan apa yang saya butuhkan dengan teman saya" },
              { id: "c", text: "Mencoba banyak jenis mobil yang berbeda" },
            ],
          },
          {
            id: 10,
            question: "Ketika mempelajari ketrampilan baru, saya paling senang:",
            choices: [
              { id: "a", text: "Melihat yang seharusnya saya kerjakan" },
              { id: "b", text: "Membicarakannya dengan guru persis apa yang sedang guru kerjakan" },
              { id: "c", text: "Mencoba sendiri dan mengerjakan sesudahnya" },
            ],
          },
          {
            id: 11,
            question: "Jika saya memilih makan dari menu, saya cenderung:",
            choices: [
              { id: "a", text: "Membayangkan seperti apa makanan itu" },
              { id: "b", text: "Mendiskusikan pilihan menu sendiri atau dengan teman dekat" },
              { id: "c", text: "Membayangkan seperti apa rasa makanan itu" },
            ],
          },
          {
            id: 12,
            question: "Ketika mendengarkan band, saya cenderung:",
            choices: [
              { id: "a", text: "Melihat anggota band dan penonton lain" },
              { id: "b", text: "Mendengarkan liriknya dan hentakannya" },
              { id: "c", text: "Bergerak mengikuti irama" },
            ],
          },
          {
            id: 13,
            question: "Ketika konsentrasi, saya paling suka:",
            choices: [
              { id: "a", text: "Fokus pada kata-kata atau gambar di depan saya" },
              { id: "b", text: "Mendiskusikan masalah dan penyelesaian yang mungkin dalam pikirkan" },
              { id: "c", text: "Banyak bergerak, menggesek-menggesekan pensil, atau menyentuh sesuatu" },
            ],
          },
          {
            id: 14,
            question: "Saya memilih perlengkapan rumah tangga karena saya suka:",
            choices: [
              { id: "a", text: "Warna dan bagaimana penampilannya" },
              { id: "b", text: "Penjelasan dari sales" },
              { id: "c", text: "Teksturnya dan bagaimana rasanya ketika menyentuhnya" },
            ],
          },
          {
            id: 15,
            question: "Ingatan pertama saya adalah:",
            choices: [
              { id: "a", text: "Melihat sesuatu" },
              { id: "b", text: "Mendengarkan sesuatu" },
              { id: "c", text: "Melakukan sesuatu" },
            ],
          },
          {
            id: 16,
            question: "Ketika saya cemas, saya akan:",
            choices: [
              { id: "a", text: "Memvisualkan skenario terburuk" },
              { id: "b", text: "Banyak bicara dalam hati tentang apa yang paling saya khawatirkan" },
              { id: "c", text: "Tidak bisa duduk tenang, terus menerus berkeliling dan memegang sesuatu" },
            ],
          },
          {
            id: 17,
            question: "Saya merasa secara khusus terhubung dengan orang lain karena:",
            choices: [
              { id: "a", text: "Bagaimana dia tampak" },
              { id: "b", text: "Apa yang mereka katakan pada saya" },
              { id: "c", text: "Bagaimana mereka membuat saya berperasaan" },
            ],
          },
          {
            id: 18,
            question: "Ketika saya harus memperbaiki ujian, saya umumnya:",
            choices: [
              { id: "a", text: "Menulis banyak catatan revisi dan diagram" },
              { id: "b", text: "Membahas catatan saya, sendiri atau dengan orang lain" },
              { id: "c", text: "Membayangkan membuat gerakan atau menciptakan rumus" },
            ],
          },
          {
            id: 19,
            question: "Jika saya menjelaskan kepada seseorang, saya cenderung:",
            choices: [
              { id: "a", text: "Menunjukkan kepada mereka apa yang saya maksud" },
              { id: "b", text: "Menjelaskan kepada mereka dengan berbagai cara sampai mereka mengerti" },
              { id: "c", text: "Mendorong mereka untuk mencoba dan menyampaikan ide saya ketika mereka mengerjakan" },
            ],
          },
          {
            id: 20,
            question: "Saya benar-benar suka:",
            choices: [
              { id: "a", text: "Menonton televisi, fotografi, melihat seni atau orang yang sedang menonton" },
              { id: "b", text: "Mendengarkan musik, radio atau berbincang dengan teman" },
              { id: "c", text: "Berolahraga, makan makanan yang enak atau menari" },
            ],
          },
          {
            id: 21,
            question: "Paling banyak waktu luang saya dihabiskan:",
            choices: [
              { id: "a", text: "Menonton televisi" },
              { id: "b", text: "Berbincang dengan teman" },
              { id: "c", text: "Melakukan aktivitas fisik, atau membuat sesuatu" },
            ],
          },
          {
            id: 22,
            question: "Jika saya pertama berkenalan dengan orang baru, saya biasanya:",
            choices: [
              { id: "a", text: "Mengadakan pertemuan tatap muka" },
              { id: "b", text: "Berbincang lewat telpon" },
              { id: "c", text: "Coba bersama-sama sambil mengerjakan sesuatu yang lain, misalnya suatu aktivitas atau makan" },
            ],
          },
          {
            id: 23,
            question: "Saya pertama-tama memperhatikan bagaimana orang:",
            choices: [
              { id: "a", text: "Tampak dan berbusana" },
              { id: "b", text: "Suara dan cara berbicara" },
              { id: "c", text: "Berdiri dan gerak" },
            ],
          },
          {
            id: 24,
            question: "Jika saya marah, saya cenderung:",
            choices: [
              { id: "a", text: "Terus memikiranya apa yang membuat saya marah" },
              { id: "b", text: "Mengeraskan suara dan mengatakan kepada orang lain bagaimana perasaan saya" },
              { id: "c", text: "Menghentakkan kaki, membanting pintu dan menunjukkan kemarahan saya" },
            ],
          },
          {
            id: 25,
            question: "Saya paling mudah mengingat:",
            choices: [
              { id: "a", text: "Wajah" },
              { id: "b", text: "Nama" },
              { id: "c", text: "Apa yang telah saya lakukan" },
            ],
          },
          {
            id: 26,
            question: "Saya berpikir bahwa seseorang berbohong jika:",
            choices: [
              { id: "a", text: "Mereka menghindar dari melihat kita" },
              { id: "b", text: "Suaranya berubah" },
              { id: "c", text: "Mereka memberikan banyak cerita lucu" },
            ],
          },
          {
            id: 27,
            question: "Ketika saya bertemu teman lama:",
            choices: [
              { id: "a", text: "Saya berkata: 'Sangat senang bertemu kamu'" },
              { id: "b", text: "Saya berkata: 'Sangat senang mendengar suara kamu'" },
              { id: "c", text: "Saya rangkul atau jabat tangan dia" },
            ],
          },
          {
            id: 28,
            question: "Saya paling mengingat sesuatu dengan:",
            choices: [
              { id: "a", text: "Menulis catatan atau membiarkan labelnya" },
              { id: "b", text: "Mengatakan dengan suara keras atau mengulang kata kunci dalam pikiran saya" },
              { id: "c", text: "Berlatih dan melakukan aktivitas atau membayangkan aktivitas itu sudah dilakukan" },
            ],
          },
          {
            id: 29,
            question: "Jika saya mengeluhkan barang-barang yang cacat, saya paling senang:",
            choices: [
              { id: "a", text: "Menulis surat" },
              { id: "b", text: "Mengeluhkan melalui telepon" },
              { id: "c", text: "Mengembalikan barang tersebut ke tokonya atau melaporkannya ke kantor" },
            ],
          },
          {
            id: 30,
            question: "Saya cenderung mengatakan:",
            choices: [
              { id: "a", text: "'Saya mengerti apa maksud kamu'" },
              { id: "b", text: "'Saya mendengar apa yang kamu katakan'" },
              { id: "c", text: "'Saya tahu bagaimana perasaan Anda'" },
            ],
          },
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
      // Menghitung jawaban yang paling banyak dipilih
      const answerCounts = {};
      selectedAnswers.forEach((answer) => {
        if (answer) {
          if (answerCounts[answer.id]) {
            answerCounts[answer.id]++;
          } else {
            answerCounts[answer.id] = 1;
          }
        }
      });
    
      // Menemukan jawaban yang paling banyak dipilih
      let mostSelectedAnswer = null;
      let highestCount = 0;
      for (const answerId in answerCounts) {
        if (answerCounts[answerId] > highestCount) {
          highestCount = answerCounts[answerId];
          mostSelectedAnswer = answerId;
        }
      }
    
      if (currentQuestionIndex === questions.length - 1) {
        // console.log("Paling banyak", mostSelectedAnswer)
        // console.log("Paling banyak", selectedAnswer)
        navigation.replace("StudyStyleResult", {
          mostSelectedAnswer,
          user: user,
          onUpdate,
        });
      } else {
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
        <Header title={"Tes Gaya Belajar"} />
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
                        {choice.id === "a" ? 'A.' : 
                        choice.id === "b" ? 'B.' : 
                        choice.id === "c" ? 'C.' :  ''}
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

export default Test

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