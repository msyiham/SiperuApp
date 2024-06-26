import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Font from '../../assets/fonts/font'
import { homeMenu } from '../../data/data'
import { Image } from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/FontAwesome';
const Home = ({user, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Container>
      <View style={[styles.header, {marginBottom:15,height:windowHeight*0.3, borderBottomEndRadius:windowWidth*0.1, borderBottomStartRadius:windowWidth*0.1}]}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:windowWidth*0.2}}>
            <Text style={{color:'black'}}>Foto</Text>
          </View>
          <View>
            <View style={{backgroundColor:"#FFD911",width:windowWidth*0.4, height:windowHeight*0.03, padding:1, borderRadius:windowWidth*0.01}}>
              <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:12}}>Halo, Selamat Datang</Text>
            </View>
            <Text style={{color:'black', fontFamily:Font.font.bold, fontSize:15}}>{user.fullName}</Text>
            <Text style={{color:'black', fontFamily:Font.font.semibold, fontSize:13}}>Siswa {user.school} Kelas {user.grade}</Text>
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
                onPress={() => navigation.navigate(item.page)}
              >
                <View style={{width:windowWidth*0.35, height:windowHeight*0.2, justifyContent:'center', alignItems:'center', }}>
                  <View style={[styles.iconContainer, {width:windowWidth*0.25, height:windowWidth*0.25, borderRadius:windowWidth*0.03}]}>
                    <Image source={item.icon} style={styles.icon} />
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
