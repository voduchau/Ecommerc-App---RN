import React, { useState } from 'react';
import Firebase from '../../config/Firebase';
// import firebase from 'react-native-firebase';
import * as firebase from 'firebase';
import {View,Text,StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';




const UpdatePassword = ({navigation})=>{
    const [currentPassword,setCurrentPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [err,setErr] = useState('');


    const reauthenticate = (currentPassword)=>{
      let user = Firebase.auth().currentUser;
      let cred = firebase.auth.EmailAuthProvider.credential(user.email,currentPassword);
      return user.reauthenticateWithCredential(cred);
    }

    const changePassword =  (newPassword,currentPassword) => {
     reauthenticate(currentPassword).then(()=>{
      let user = Firebase.auth().currentUser;
      user.updatePassword(newPassword).then(()=>{
        console.log('update pass succes');
      })
      .catch((error)=>{
        console.log(error.messgae);
      })
     })
     .catch((error)=>{
       console.log(error.messgae);
     })
    }

    return (
        <View>
            <Text>{Firebase.auth().currentUser.email?Firebase.auth().currentUser.email:null}</Text>
            <TextInput
                    style={styles.inputBox}
                    value={newPassword}
                    onChangeText={password => setNewPassword(password)}
                    placeholder='New Password'
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.inputBox}
                    value={currentPassword}
                    onChangeText={password => setCurrentPassword(password)}
                    placeholder='current Password'
                    secureTextEntry={true}
                />
            <Button title='change pass' onPress={()=>changePassword(newPassword,currentPassword)} />
            
        </View>
    )
};


const styles = StyleSheet.create({});

export default UpdatePassword;