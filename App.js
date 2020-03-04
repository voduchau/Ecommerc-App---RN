import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View,Text} from 'react-native';

const Tab = createBottomTabNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size }) =>( 
           focused ? <AntDesign name="home" size={30} color="blue" /> : <AntDesign name="home" size={30} color="gray" />
          ),
        }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size }) => (
            focused? <AntDesign name="profile" size={30} color="blue" /> : <AntDesign name="profile" size={30} color="gray" />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;