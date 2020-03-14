import React from 'react';
import Firebase from '../../config/Firebase';
import {View,Text,Button,StyleSheet,Image} from 'react-native';

const Login = ({navigation,user})=>{
   

    //log out user
    const SignOut = async ()=>{
        try {
            await Firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={{borderTopWidth:2,borderColor:'red',flex:1}}>
            <Image style={styles.avatar} source={require('../../image/user.png')} />
            <Text style={{marginBottom:15,fontSize:15,fontWeight:'bold',color:'black'}}>{user.email}</Text>

                <View style={{width:'40%',alignSelf:'center',borderBottomColor:'pink',borderBottomWidth:2,marginBottom:5}}>
                    <Button title="change password" onPress ={()=>navigation.navigate('UpdatePassword')} />
                </View>
                <View style={{width:'40%',alignSelf:'center',borderBottomColor:'pink',borderBottomWidth:2,marginBottom:5}}>
                    <Button title="log out" onPress = {()=>SignOut()} />
                </View>
                
        </View>
    )
}

const styles=StyleSheet.create({
    avatar:{
        width:100,
        height:100,
        alignSelf:'center',
        borderColor:'gray',
        borderWidth:3,
        borderRadius:50
    }
})
export default Login;