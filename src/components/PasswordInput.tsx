import React, { useState } from 'react';
import { View, Pressable, TextInput, StyleSheet, Dimensions, Text } from 'react-native';
import Font from '../assets/fonts/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PasswordInput = ({ onPasswordChange }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        // Pass the password value to the parent component
        if (onPasswordChange) {
        onPasswordChange(text);
        }
    };

  return (
    <View>
        <Text style={{color:'white', fontFamily:Font.font.bold, fontSize:15}}>Password</Text>
        <View style={[styles.container, {width:windowWidth*0.8, borderRadius:windowWidth*0.1}]}>
        <TextInput
            style={styles.input}
            placeholder="Masukkan Password"
            placeholderTextColor={'#D9D9D9'}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={handlePasswordChange} // Call the handlePasswordChange function
        />
        <Pressable onPress={handlePasswordVisibility} style={{ justifyContent: 'center' }}>
            <FontAwesome5 name={passwordVisibility ? 'eye' : 'eye-slash'} size={20} color="#ffff" />
        </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#FFD911',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    color: 'white', // Customize the input text color
    fontSize: 12, // Customize the input font size
    paddingVertical: 8,
    fontFamily: Font.font.regular,
  },
});

export default PasswordInput;