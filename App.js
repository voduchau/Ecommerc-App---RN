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
        <Tab.Screen  name="HomeScreen" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color="#900" />
          ),
        }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={30} color="#900" />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;