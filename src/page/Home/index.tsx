import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Container from '../../components/Container'
import Font from '../../assets/fonts/font'
import { homeMenu } from '../../data/data'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import PopUp from '../../components/PopUp'
const Home = ({user, navigation, onUpdate}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [photoURL, setPhotoUrl] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    if (user.photoURL) {
      setPhotoUrl(user.photoURL);
    } else {
      setPhotoUrl(null); // Set photoURL to null if photoURL is empty
    }

    if (user.StudyStyleTest === "") {
      setPopupVisible(true);
    }
  }, [user.photoURL, user.StudyStyleTest]);
  const goToMenu = (item) => {
    console.log("Halaman exploration main:", onUpdate);
    navigation.navigate(item.page, {
      user,
      onUpdate
    });
  };
  const goToStudyTestStyle = () => {
    console.log("Halaman test gaya:", onUpdate);
    navigation.navigate("StudyStyleTest", {
      user,
      onUpdate
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const exercises = [user.exercise1, user.exercise2, user.exercise3];
  const totalExercises = exercises.filter(exercise => exercise !== 0).length;
  const totalPoints = exercises.reduce((total, exercise) => total + exercise, 0);
  const averageProgress = totalPoints / (totalExercises * 10); // Assuming the maximum point for each exercise is 10
  const averageTotal = Math.round(averageProgress * 100);

  console.log(user.deviceRegistered)
  const goToAchievement = () => {
    navigation.navigate('Achievement', {
      user,
      onUpdate: (updatedUser) => {
        onUpdate(updatedUser);
      },
    });
  };
  return (
    <Container>
      <PopUp visible={popupVisible} onClose={closePopup} onPress={()=>goToStudyTestStyle()}/>
      <View style={[styles.header, {marginBottom:15,height:windowHeight*0.3, borderBottomEndRadius:windowWidth*0.1, borderBottomStartRadius:windowWidth*0.1}]}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:windowWidth*0.3, alignItems:'center', justifyContent:'center'}}>
            <Image source={{ uri: photoURL || 'https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/user.png?alt=media&token=1fd84b0b-0a31-4f33-8f3b-0195cb789ce6' }} style={[{width:windowWidth*0.2, height:windowWidth*0.2, borderRadius:windowWidth*0.2}]}/>
          </View>
          <View style={{width:windowWidth*0.7, justifyContent:'center'}}>
            <View style={{backgroundColor:"#FFD911",width:windowWidth*0.4, height:windowHeight*0.03, padding:1, borderRadius:windowWidth*0.01, alignItems:"center"}}>
              <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:12}}>Halo, Selamat Datang</Text>
            </View>
            <Text style={{color:'black', fontFamily:Font.font.bold, fontSize:15}}>{user.fullName}</Text>
            <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:13}}>Siswa {user.school} Kelas {user.grade}</Text>
            {averageTotal !== 0 && (
              <>
              <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:13, marginTop:10}}>
                Nilai rata-rata Anda {averageTotal}%
              </Text>
              <TouchableOpacity onPress={goToAchievement}>
                <Text style={{color:'gray', fontFamily:Font.font.regular, fontSize:13, marginTop:3}}>
                  Lihat Capaian
                </Text>
              </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.materiText}>Materi</Text>
          <View style={{alignItems:'center', marginBottom:windowHeight*0.1}}>
            {homeMenu.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.menuItem,{width:windowWidth*0.9, height:windowHeight*0.22, borderRadius:windowWidth*0.03}]} 
                onPress={()=>goToMenu(item)}>
                <View style={{width:windowWidth*0.35, height:windowHeight*0.2, justifyContent:'center', alignItems:'center', }}>
                  <View style={[styles.iconContainer, {width:windowWidth*0.25, height:windowWidth*0.25, borderRadius:windowWidth*0.03}]}>
                    <Image source={item.icon} style={styles.icon} width={windowWidth*0.2} height={windowWidth*0.2} resizeMode="cover" />
                  </View>
                </View>
                <View style={[styles.textContainer]}>
                  <View style={{height:windowHeight*0.12}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                  <View style={{backgroundColor:'#C4C4C4', width:"70%", height:windowHeight*0.04, marginTop:10 ,justifyContent:'center', flexDirection:'row', alignItems:'center', borderRadius:10}}>
                    <Text style={styles.buttonText}>Selengkapnya  </Text>
                    <Ionicons
                      name={"arrow-circle-o-right"}
                      size={15}
                      color={"black"}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  content: {
    alignSelf: 'stretch', // Make the content view stretch to the width of its parent
    marginTop: 15,
    paddingHorizontal: 15, // Add some horizontal padding if needed
  },
  materiText: {
    color: 'white',
    fontFamily: Font.font.bold,
    fontSize: 20,
    textAlign: 'left',
  },
  menuItem:{
    backgroundColor:'white',
    flexDirection:'row',
    marginBottom:15
  },
  title:{
    fontFamily:Font.font.bold,
    color:"black",
    fontSize: 15,
  },
  description:{
    fontFamily:Font.font.regular,
    color:"black",
    fontSize: 11,
  },
  buttonText:{
    fontFamily:Font.font.bold,
    color:"black",
    fontSize: 11,
  },
  iconContainer:{
    backgroundColor:"#FFD911",
    justifyContent:'center',
    alignItems:'center'
  },
  textContainer:{
    margin:10,
    width:"58%",
  }
});
