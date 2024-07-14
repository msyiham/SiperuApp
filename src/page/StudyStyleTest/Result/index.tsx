import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/Container'
import { FIRESTORE_DB } from '../../../hooks/firebase'
import Loading from '../../../components/Loading'
import SweetAlert from 'react-native-sweet-alert';
import Font from '../../../assets/fonts/font'
import { collection, FieldValue, doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { recomendationDetail } from '../../../data/data'

const Result = ({ navigation, route }) => {
    const { mostSelectedAnswer, user, onUpdate } = route.params;
    const { height, width } = useWindowDimensions();
    const [loading, setLoading] = useState(false);

    const saveTotalPointToFirestore = async (uid) => {
        try {
            setLoading(true);
            const firestore = FIRESTORE_DB;
            const docRef = doc(firestore, "users", uid);
      
            const docSnapshot = await getDoc(docRef);
      
            if (docSnapshot.exists()) {
                await updateDoc(docRef, {
                    StudyStyleTest: mostSelectedAnswer,
                });
            }
    
            const updatedUser = {
                ...user,
                StudyStyleTest: mostSelectedAnswer,
            };
    
            if (typeof onUpdate === 'function') {
                onUpdate(updatedUser);
            } else {
                console.error("onUpdate is not a function or is undefined");
            }
    
            SweetAlert.showAlertWithOptions({
                title: 'Selamat',
                subTitle: `Anda Berhasil Menyelesaikan Tes Gaya Belajar`,
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
        } finally {
            setLoading(false);
        }
    };

    let recommendation = "";
    if (mostSelectedAnswer === "a") {
        recommendation = "VISUAL";
    } else if (mostSelectedAnswer === "b") {
        recommendation = "AUDITORI";
    } else if (mostSelectedAnswer === "c") {
        recommendation = "KINESTETIK";
    }

    const detail = recomendationDetail.find(detail => detail.title === recommendation);

    return (
        <Container>
            <Loading visible={loading} />
            <ScrollView style={{ flex: 1, marginTop: 20, }}>
                <Text style={styles.title}>Rekomendasi Gaya Belajar</Text>
                <Text style={styles.subTitle}>Jadi rekomendasi ini dibuat berdasarkan jawaban Anda terhadap soal tes gaya belajar yang baru saja dikerjakan.</Text>
                <Text style={styles.subPoint}>Gaya Belajar dominan Anda adalah <Text style={styles.point}>{recommendation}</Text></Text>
                <View style={[styles.resultContainer, { width: width - 40 }]}>
                    <Text style={styles.resultText}>Pembahasan:</Text>
                    {detail.description.map((paragraph, paragraphIndex) => (
                        <View key={paragraphIndex} style={{ marginBottom: 15 }}>
                            {paragraph.map((item, itemIndex) => (
                                <Text
                                    key={itemIndex}
                                    style={{
                                        fontFamily: item.type === "bold" ? Font.font.bold : Font.font.regular,
                                        textAlign: 'justify',
                                        fontSize:15,
                                        color:"black"
                                    }}
                                >
                                    {item.text}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={[styles.button, { width: width * 0.3, height: height * 0.05, marginTop: height * 0.05 }]}
                    onPress={() => {
                        const uid = user.uid;
                        saveTotalPointToFirestore(uid);
                    }}
                >
                    <Text style={styles.buttonText}>Simpan</Text>
                </TouchableOpacity>
            </ScrollView>
        </Container>
    );
};

export default Result;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        margin: 5,
        textAlign: "center",
        fontFamily: Font.font.bold,
        color: "white"
    },
    subTitle: {
        fontSize: 15,
        marginBottom: 25,
        textAlign: "center",
        fontFamily: Font.font.regular,
        color: "white"
    },
    point: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: Font.font.bold,
        color: "#FFD911",
    },
    subPoint: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: Font.font.regular,
        color: "white",
    },
    resultContainer: {
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "white",
        alignSelf:'center'
    },
    resultText: {
        fontSize: 18,
        fontFamily: Font.font.bold,
        marginBottom: 10,
        color: 'black',
    },
    button: {
        backgroundColor: "#FFD911",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: "black",
        fontFamily:Font.font.bold
    }
});
