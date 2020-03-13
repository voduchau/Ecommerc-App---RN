import React, { useState } from 'react';
import Firebase from '../../config/Firebase';
// import firebase from 'react-native-firebase';
import {View,Text,StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';




const UpdatePassword = ({navigation})=>{
    const [currentPassword,setCurrentPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [err,setErr] = useState('');

    const changePassword = async (newPassword) => {
      const user = Firebase.auth().currentUser
      try {
        await user.updatePassword(newPassword)
        navigation.navigate('LoginScreen')
      } catch(err){
        console.log(err);
        setErr(err.message);
      }
    }
    const SignOut = async ()=>{
      try {
          await Firebase.auth().signOut();
          console.log('ok');
          navigation.navigate('LoginScreen')
      } catch (e) {
          console.log(e);
      }
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
                {err != ''?
                <>
                  <Text>Please Login again before update pass word</Text>
                  <Button title='Login' onPress={()=>SignOut()} />
                  </>
                :null}
            <Button title='change pass' onPress={()=>changePassword(newPassword)} />
            
        </View>
    )
};


const styles = StyleSheet.create({});

export default UpdatePassword;