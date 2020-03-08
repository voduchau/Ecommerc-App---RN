import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ItemDetail from './ItemDetail';
import CartScreen from './CartScreen';
import {View,Text,StyleSheet} from 'react-native';
const Stack = createStackNavigator();
const StackHome = ({route,navigation,CountItemCart}) => {
    useEffect(() => {
        if (route.params?.CountItemCart) {
            
        //   console.log(route.params?.CountItemCart,'coooooo ton tai params count trong stackhomee');

        }
        else
        {
            // console.log('khonggggg tai params count trong stackhomeee');
        }
      }, [route.params?.CountItemCart]);
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="HomeScreen"
                initialParams={{CountItemCart:route.params?.CountItemCart,GetItemToCart:route.params.GetItemToCart}}
                navigation={navigation}
                component={HomeScreen}
                options={{ title: 'VentiCo.vn', }}
                
            />
            <Stack.Screen
                name="ItemDetail"
                navigation={navigation}
                component={ItemDetail}
                options={{ title: 'Detail' }}
            />
            <Stack.Screen
                name="CartScreen"
                navigation={navigation}
                component={CartScreen}
                options={{ title: 'CartScreen' }}
            />
        </Stack.Navigator>
    );
};

const styles=StyleSheet.create({});

export default StackHome;