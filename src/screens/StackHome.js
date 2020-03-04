import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ItemDetail from './ItemDetail';
import {View,Text,StyleSheet} from 'react-native';
const Stack = createStackNavigator();
const StackHome = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'VentiCo.vn' }}
            />
            <Stack.Screen
                name="ItemDetail"
                component={ItemDetail}
                options={{ title: 'Detail' }}
            />
        </Stack.Navigator>
    );
};

const styles=StyleSheet.create({});

export default StackHome;