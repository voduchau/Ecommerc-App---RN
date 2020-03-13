import React, { useState,useEffect } from 'react';
import Firebase from '../../config/Firebase';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'

const LoginScreen = ({navigation}) => {
    //email password
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //profile user login
    const [profile,setProfile] = useState([]);

    //show nếu có lỗi đăng nhập
    const [err,setErr] = useState('');

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    // xử lý login
    const handleLogin = ()=>{
        Firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(()=>{
                    navigation.navigate('LoginScreen')
                })
                .catch(error => setErr(error))
    }
    //log out user
    const SignOut = async ()=>{
        try {
            await Firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    //check login ?
    Firebase.auth().onAuthStateChanged( (user)=> {
        if (user) {
          // User is signed in.
           setUser(user);
        } else {
          // No user is signed in.
          setUser(null);
        }
        if(loading){
            setLoading(false);
        }
      });
      
        return (
            <View style={styles.container}>
                <>{loading ? null :
                (user ?
                <>
                <Text style={{fontSize:25,fontWeight:'bold',color:'green'}}>Welcome {user.email}</Text>
                <Button title="change password" onPress ={()=>navigation.navigate('UpdatePassword')} />
                <Button title="log out" onPress = {()=>SignOut()} />
                </>
                :
                <>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={password => setPassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <Text>{err.length != 0 ? err.message:null}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>handleLogin()} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button title="Don't have an account yet? Sign up" onPress={()=>navigation.navigate('SignUpScreen')} />
                </>
                )
                }</>
                
            
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default LoginScreen;