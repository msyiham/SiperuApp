import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Font from '../assets/fonts/font';
const Loading = ({visible}) => {
  return (
    <View>
        <Modal visible={visible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Spinner
              visible={visible}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
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
  spinnerTextStyle:{
    color:"#FFD911", fontFamily:Font.font.semibold, fontSize:15
  }
});

export default Loading;