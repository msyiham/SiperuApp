import React from 'react';
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

function BottomTabNavigator({route}) {
  const { user } = route.params;
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
            style={styles.button}
            onPress={() => navigate("ScanAR")}
          >
            <Image source={require('../assets/img/AR_ICON.png')} height={windowHeight*0.01}/>
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      screenOptions={{ headerShown: false }}
    >
      <CurvedBottomBar.Screen
        name="home"
        position="LEFT"
        component={(props) => <Page.Home {...props} user={user} />}
      />
      <CurvedBottomBar.Screen
        name="account"
        component={(props) => <Page.Account {...props} user={user} />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={Page.SplashScreen} />
        {/* MainApp */}
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen name="ScanAR" component={Page.ScanAR} />

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
        <Stack.Screen name="UnsurDetail" component={Page.UnsurPage.UnsurDetail} />

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
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAB700',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
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
    width: 30,
    height: 30,
  },
});

export default Navigation;
