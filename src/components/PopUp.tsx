import React from 'react';
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from 'react-native';
import Font from '../assets/fonts/font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopUp = ({visible, onClose, onPress}) => {
  return (
    <View>
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require("../assets/img/popup.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" color="white" size={25}/>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    marginTop: 20,
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  closeButtonText: {
    color: 'black',
    fontFamily: Font.font.semibold,
    fontSize: 15,
  },
});

export default PopUp;
