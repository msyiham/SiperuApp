import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Font from '../../assets/fonts/font';
import Header from '../../components/Header';
import ProfileInput from '../../components/ProfileInput';
import * as ImagePicker from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import SweetAlert from 'react-native-sweet-alert';
import { FIRESTORE_DB, FIREBASE_STORAGE } from '../../hooks/firebase';
import Loading from '../../components/Loading';

const EditProfile = ({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { user, onUpdate } = route.params;
    const firestore = FIRESTORE_DB;
    const storage = FIREBASE_STORAGE;
    const [isLoading, setLoading] = useState(false);

    const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/user.png?alt=media&token=1fd84b0b-0a31-4f33-8f3b-0195cb789ce6';

    const [photoURL, setPhotoUrl] = useState(user.photoURL || null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [userName, setUserName] = useState(user.username);
    const [fullName, setFullName] = useState(user.fullName);
    const [alamat, setAlamat] = useState(user.alamat);
    const [school, setSchool] = useState(user.school);
    const [grade, setGrade] = useState(user.grade);
    const [age, setAge] = useState(user.age);
    const [numberPhone, setNumberPhone] = useState(user.numberPhone);
    const [birthday, setBirthday] = useState(user.birthday);


    //update data foto
    const handleImagePicker = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await ImagePicker.launchImageLibrary(options);
            
            if (response.assets && response.assets.length > 0) {
                const image = { uri: response.assets[0].uri };
                setSelectedImage(image);

                const imageResponse = await fetch(image.uri);
                const blob = await imageResponse.blob();
                const photoURL = await uploadImage(blob);
                await updatePhoto(photoURL);
            }
        } catch (error) {
            console.log('Error handling image picker:', error);
        }
    };

    const uploadImage = async (imageBlob) => {
        try {
            const uid = user.uid;
            const imageRef = ref(storage, `${uid}.jpg`);

            await uploadBytes(imageRef, imageBlob, { contentType: 'image/jpeg' });

            const photoURL = await getDownloadURL(imageRef);

            return photoURL;
        } catch (error) {
            console.log('Error uploading image:', error);
            throw error;
        }
    };

    const updatePhoto = async (photoURL) => {
        try {
            const uid = user.uid;
            const userDocRef = doc(firestore, 'users', uid);
            setLoading(true);
            await updateDoc(userDocRef, {
                photoURL: photoURL,
            });

            setPhotoUrl(photoURL);

            SweetAlert.showAlertWithOptions({
                title: 'Selamat',
                subTitle: 'Anda Berhasil Mengupdate Foto Profil',
                confirmButtonTitle: 'OK',
                style: 'success',
                cancellable: false,
            });
            } catch (error) {
            console.log('Error updating user:', error);
            SweetAlert.showAlertWithOptions({
                title: 'Error',
                subTitle: `Update Failed: ${error.message}`,
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#746555',
            });
        } finally {
            setLoading(false);
        }
    };




  //update data isian

    const showConfirmUpdate = () => {
        Alert.alert(
        'Konfirmasi',
        'Apakah Anda yakin ingin memperbarui pengguna?',
        [
            { text: 'Batal', style: 'cancel' },
            { text: 'Ya', onPress: updateUser },
        ]
        );
    };
    const updateUser = async () => {
        
        try {
            const uid = user.uid;
            const userDocRef = doc(firestore, 'users', uid);
            setLoading(true);
            await updateDoc(userDocRef, {
                username: userName,
                alamat: alamat, // Gunakan URL foto yang diperoleh dari uploadImage
                fullName: fullName,
                noHp: numberPhone,
                grade: grade,
                school: school,
                age: age,
                birthday:birthday
            });
        
            // Show success alert
            SweetAlert.showAlertWithOptions({
                title: 'Selamat',
                subTitle: 'Anda Berhasil Mengupdate',
                confirmButtonTitle: 'OK',
                style: 'success',
                cancellable: false,
            });
            // Update local user state and call the callback
            const updatedUser = {
                ...user,
                username: userName,
                alamat: alamat,
                fullName: fullName,
                noHp: numberPhone,
                photoURL: photoURL,
                grade: grade,
                school: school,
                age: age,
                birthday:birthday
                // Tambahkan fields lainnya jika perlu
            };
            onUpdate(updatedUser);
            navigation.reset({
                index: 0,
                routes: [{ name: 'MainApp', params: { user: updatedUser } }],
            });
            
        
            console.log('User updated successfully!');
            } catch (error) {
            setLoading(true);
            console.log('Error updating user:', error);
        
            // Show error alert
            SweetAlert.showAlertWithOptions({
                title: 'Error',
                subTitle: `Update Failed: ${error.message}`,
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#746555',
            });
        } finally {
            setLoading(false);
        }
    };

    
  return (
    <Container>
      <Loading visible={isLoading} />
      <View style={[styles.header, { height: windowHeight * 0.3, borderBottomEndRadius: windowWidth * 0.1, borderBottomStartRadius: windowWidth * 0.1 }]}>
        <Image
          source={
            selectedImage
              ? { uri: selectedImage.uri }
              : (photoURL ? { uri: photoURL } : { uri: defaultImage })
          }
          style={[{ width: windowWidth * 0.35, height: windowWidth * 0.35, borderRadius: windowWidth * 0.35 }]}
        />
        <TouchableOpacity onPress={handleImagePicker} style={{ marginTop: 10 }}>
          <Text style={{ color: '#5A87F1', fontFamily: Font.font.regular, fontSize: 15 }}>ubah foto</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={{ color: 'white', fontFamily: Font.font.bold, fontSize: 20 }}>Segera lengkapi data dirimu, untuk informasi selengkapnya!</Text>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <ProfileInput
            keyboardType="default"
            value={userName}
            setValue={setUserName}
            width={0.9}
            title="Nama Pengguna"
            placeholder="Isilah Nama Pengguna"
          />
          <ProfileInput
            keyboardType="default"
            value={fullName}
            setValue={setFullName}
            width={0.9}
            title="Nama Lengkap"
            placeholder="Isilah Nama Lengkap"
          />
          <ProfileInput
            keyboardType="default"
            value={school}
            setValue={setSchool}
            width={0.9}
            title="Asal Sekolah"
            placeholder="Isilah Asal Sekolah"
          />
          <ProfileInput
            keyboardType="default"
            value={grade}
            setValue={setGrade}
            width={0.9}
            title="Kelas"
            placeholder="Isilah Kelas"
          />
          <ProfileInput
            keyboardType="default"
            value={alamat}
            setValue={setAlamat}
            width={0.9}
            title="Alamat"
            placeholder="Isilah Alamat"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:windowWidth*0.9 }}>
            <ProfileInput
              keyboardType="default"
              value={birthday}
              setValue={setBirthday}
              width={0.65}
              title="Tempat & Tanggal Lahir"
              placeholder="Malang, tgl/bln/thn"
            />
            <ProfileInput
              keyboardType="default"
              value={age}
              setValue={setAge}
              width={0.2}
              title="Usia"
              placeholder="00"
            />
          </View>
          <ProfileInput
            keyboardType="default"
            value={numberPhone}
            setValue={setNumberPhone}
            width={0.9}
            title="Nomor Telepon"
            placeholder="Isilah Nomor Telepon"
          />
        </View>
        <TouchableOpacity onPress={showConfirmUpdate} style={[styles.button, { width: windowWidth * 0.4, height: windowHeight * 0.05, borderRadius: windowWidth * 0.02 }]}>
          <Text style={{ fontFamily: Font.font.bold, color: 'black', fontSize: 15 }}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FFD911',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
