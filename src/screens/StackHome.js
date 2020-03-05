import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ItemDetail from './ItemDetail';
import {View,Text,StyleSheet} from 'react-native';
const Stack = createStackNavigator();
const StackHome = ({route}) => {
    // const { name } = route.params;
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'VentiCo.vn', }}
                
            />
            <Stack.Screen
                name="ItemDetail"
                component={ItemDetail}
                options={{ title: 'Detail' }}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ title: 'ProfileScreen' }}
            />
        </Stack.Navigator>
    );
};

const styles=StyleSheet.create({});

export default StackHome;