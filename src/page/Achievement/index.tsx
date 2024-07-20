import { StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import * as Progress from 'react-native-progress';
import Font from '../../assets/fonts/font';

const Achievement = ({route}) => {
    const {user} = route.params
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    // Calculate average progress from exercise1, exercise2, and exercise3
    const exercises = [user.exercise1, user.exercise2, user.exercise3];
    const totalExercises = exercises.filter(exercise => exercise !== 0).length;
    const totalPoints = exercises.reduce((total, exercise) => total + exercise, 0);
    const averageProgress = totalPoints / (totalExercises * 10); // Assuming the maximum point for each exercise is 10
    // Calculate percentage of exercises completed
    const exercisesCompleted = [user.exercise1, user.exercise2, user.exercise3].filter(ex => ex > 0).length;
    const exercisesCompletedProgress = exercisesCompleted / 3;

    // State for animated progress
    const [animatedAverageProgress, setAnimatedAverageProgress] = useState(0);
    const [animatedExercisesCompletedProgress, setAnimatedExercisesCompletedProgress] = useState(0);

    // Use effect to animate progress
    useEffect(() => {
        setAnimatedAverageProgress(averageProgress);
        setAnimatedExercisesCompletedProgress(exercisesCompletedProgress);
    }, [averageProgress, exercisesCompletedProgress]);

    return (
        <Container>
            <Header title="Pencapaian"/>
        <ScrollView style={{width:windowWidth}}>

            <View style={styles.container}>
                <View style={styles.progressContainer}>
                    <Text style={styles.text}>Pencapaian Anda</Text>
                    <Progress.Circle 
                        size={windowWidth*0.7} 
                        progress={animatedExercisesCompletedProgress} 
                        showsText={true}
                        formatText={() => `${Math.round(animatedExercisesCompletedProgress * 100)}%`}
                        color={"#FFD911"}
                        animated={true}
                        animationType="timing"
                        textStyle={styles.progressText}
                        animationConfig={{ duration: 10000 }}
                        thickness={10}
                        unfilledColor='white'
                    />
                    <Text style={styles.subText}>Pencapaian ini didapatkan dari presentase latihan soal yang sudah Anda kerjakan. Anda sudah mengerjakan {totalExercises} latihan soal</Text>
                </View>

                <View style={styles.progressContainer}>
                    <Text style={styles.text}>Nilai rata-rata Anda</Text>
                    <Progress.Circle 
                        size={windowWidth*0.7} 
                        progress={animatedAverageProgress} 
                        showsText={true}
                        formatText={() => `${Math.round(animatedAverageProgress * 100)}%`}
                        textStyle={styles.progressText}
                        color={"#9EB7F4"}
                        animated={true}
                        animationType="timing"
                        animationConfig={{ duration: 10000 }}
                        thickness={10}
                        unfilledColor='white'
                    />
                </View>
                <Text style={styles.subText}>Nilai Anda:</Text>
                {user.exercise1 !== 0 && (
                    <Text style={styles.subText}>Latihan Soal 1: {user.exercise1*10}</Text>
                )}
                {user.exercise2 !== 0 && (
                    <Text style={styles.subText}>Latihan Soal 2: {user.exercise2*10}</Text>
                )}
                {user.exercise3 !== 0 && (
                    <Text style={styles.subText}>Latihan Soal 3: {user.exercise3*10}</Text>
                )}
            </View>
        </ScrollView>
        </Container>
    )
}

export default Achievement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontFamily:Font.font.bold,
        color:"white",
        fontSize: 20,
        marginTop: 10,
        marginBottom:10
    },
    subText: {
        fontFamily:Font.font.regular,
        color:"white",
        fontSize: 18,
        marginTop: 10,
        marginBottom:10,
        textAlign:"center"
    },
    progressText: {
        fontFamily:Font.font.bold,
        fontSize: 45,
    },
    progressContainer: {
        marginVertical: 20,
        alignItems: 'center',
    }
});
