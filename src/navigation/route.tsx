import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import * as Page from "../page";
import {
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'react-native-animatable';

const Stack = createNativeStackNavigator();

const BottomTabNavigator = ({ route, navigation  }) => {
  const { user: initialUser, onUpdate } = route.params;
  const [user, setUser] = useState(initialUser);


  console.log("main app", onUpdate)
  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
    if (onUpdate) {
      onUpdate(updatedUser);
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home';
        break;
      case 'account':
        icon = 'person';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  console.log("Halaman Main App:", handleUserUpdate);
  const goToScanAR = () => {
    navigation.navigate("ScanAR", {
      user,
      onUpdate:handleUserUpdate
    });
  };
  return (
    <CurvedBottomBar.Navigator
      type="UP"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="#FFD911"
      initialRouteName="home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            onPress={goToScanAR}
          >
            <Image source={require('../assets/img/AR_ICON.png')} height={windowHeight * 0.01} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      screenOptions={{ headerShown: false }}
    >
      <CurvedBottomBar.Screen
        name="home"
        position="LEFT"
        component={(props) => <Page.Home {...props} user={user} onUpdate={handleUserUpdate} />}
      />
      <CurvedBottomBar.Screen
        name="account"
        component={(props) => <Page.Account {...props} user={user} onUpdate={handleUserUpdate} />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={Page.SplashScreen} />
        {/* MainApp */}
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen name="Achievement" component={Page.Achievement} />


        {/* Lock Screen */}
        <Stack.Screen name="LockPremium" component={Page.LockPremium} />


        {/* Account Menu */}
        <Stack.Screen name="UserGuide" component={Page.AccountMenu.UserGuide} />
        <Stack.Screen name="TermConditions" component={Page.AccountMenu.TermConditions} />
        <Stack.Screen name="Contact" component={Page.AccountMenu.Contact} />


        {/* ScanAR */}
        <Stack.Screen name="ScanAR" component={Page.ScanAR.Main} />
        <Stack.Screen name="Hydrogen" component={Page.ScanAR.Hydrogen} />
        <Stack.Screen name="Lithium" component={Page.ScanAR.Lithium} />
        <Stack.Screen name="Calcium" component={Page.ScanAR.Calcium} />
        <Stack.Screen name="Aluminium" component={Page.ScanAR.Aluminium} />
        <Stack.Screen name="Natrium" component={Page.ScanAR.Natrium} />


        {/* Edit Profile */}
        <Stack.Screen name="EditProfile" component={Page.EditProfile} />


        {/* auth */}
        <Stack.Screen name="Login" component={Page.Auth.Login} />
        <Stack.Screen name="MenuLogin" component={Page.Auth.Menu} />
        <Stack.Screen name="Register" component={Page.Auth.Register} />
        <Stack.Screen name="ForgotPassword" component={Page.Auth.ForgotPassword} />


        {/* Games */}
        <Stack.Screen name="MenuGames" component={Page.Games.MenuGames} />
        <Stack.Screen name="PecahBalon" component={Page.Games.PecahBalon} />
        <Stack.Screen name="TTS" component={Page.Games.TTS} />
        <Stack.Screen name="PukulTikus" component={Page.Games.PukulTikus} />


        {/* Unsur */}
        <Stack.Screen name="Unsur" component={Page.UnsurPage.Unsur} />
        <Stack.Screen name="PeriodicTable" component={Page.UnsurPage.PeriodicTable} />
        <Stack.Screen name="Music" component={Page.UnsurPage.Music} />

        {/* Menu */}
        <Stack.Screen name="AI" component={Page.AI} />


        {/* Exploration */}
        <Stack.Screen name="ExplorationMain" component={Page.Exploration.ExplorationMain} />
        <Stack.Screen name="AudioBook" component={Page.Exploration.AudioBook} />

        <Stack.Screen name="LearningVideos" component={Page.Exploration.LearningVideos.List} />
        <Stack.Screen name="VideoPlayer" component={Page.Exploration.LearningVideos.VideoPlayer} />

        <Stack.Screen name="ExcerciseMenu" component={Page.Exploration.ExcerciseMenu} />
        <Stack.Screen name="ExerciseResult" component={Page.Exploration.ExerciseResult} />
        <Stack.Screen name="ExerciseMark" component={Page.Exploration.ExerciseMark} />
        <Stack.Screen name="Excercise1" component={Page.Exploration.Excercise1} />
        <Stack.Screen name="Excercise2" component={Page.Exploration.Excercise2} />
        <Stack.Screen name="Excercise3" component={Page.Exploration.Excercise3} />


        {/* StudyStyleTest */}
        <Stack.Screen name="StudyStyleTest" component={Page.StudyStyleTest.Test} />
        <Stack.Screen name="StudyStyleResult" component={Page.StudyStyleTest.Result} />


        {/* Forum Discussion */}
        <Stack.Screen name="ShowDiscuss" component={Page.ForumDiscussion.Show} />
        <Stack.Screen name="CreateDiscuss" component={Page.ForumDiscussion.Create} />
        <Stack.Screen name="DetailDiscuss" component={Page.ForumDiscussion.Detail} />
      </Stack.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  bottomBar: {},
  btnCircleUp: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD911',
    bottom: 25,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android Shadow
    elevation: 5,
  },
  
  imgCircle: {
    width: 25,
    height: 25,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 25,
    height: 25,
  },
});

export default Navigation;
