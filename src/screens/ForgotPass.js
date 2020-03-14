import React, { useState,useEffect } from 'react';
import Firebase from '../../config/Firebase';
import { View, Text, StyleSheet,FlatList, Button, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const ForgotPass = ({navigation}) => {
    const [email,setEmail] = useState('');
    const ResetPassWord = ()=>{
        
        Firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            console.log('send email reset password succes');
            Alert.alert('Please check your email');
            navigation.navigate('LoginScreen');
        })
        .catch((error)=>{
            console.log(error);
        })
      }
    return (
       <View>
           <Text>Enter your Email:</Text>
           <TextInput
            placeholder="your email"
            onChangeText={text => setEmail(text)}
           />
           <Button title='Reset Password' onPress={()=>ResetPassWord()} />
       </View>
    )
};

const styles=StyleSheet.create({});

export default ForgotPass;