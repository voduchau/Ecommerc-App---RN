import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View,Text,StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
const Stack = createStackNavigator();
const StackLogin = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="LoginScreen"
                navigation={navigation}
                component={LoginScreen}
                options={{ title: 'LoginScreen', }}
                
            />
            <Stack.Screen
                name="SignUpScreen"
                navigation={navigation}
                component={SignUpScreen}
                options={{ title: 'SignUpScreen' }}
            />
        </Stack.Navigator>
    );
};

const styles=StyleSheet.create({});

export default StackLogin;