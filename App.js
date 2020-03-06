import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import CartScreen from './src/screens/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from './src/screens/StackHome';
import IconBadge from 'react-native-icon-badge';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View,Text} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  const [count,setCount] = useState(0);
  console.log(count,'ths is countd');
  // hàm đếm số lượng item từ ItemDetail truyền qua để show vào tab navigation
  const CountItemCart = (countItem) =>{
    setCount(countItem);
  }
  return(
    <NavigationContainer>
      <Tab.Navigator>

        {/* Home Screen */}
        <Tab.Screen initialParams={{CountItemCart:CountItemCart}} name="StackHome" component={StackHome} i options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({focused, color, size }) =>( 
           focused ? <AntDesign name="home" size={30} color="blue" /> : <AntDesign name="home" size={30} color="gray" />
          ),
        }} />

        {/* Cart Screen */}
        <Tab.Screen name="CartScreen" component={CartScreen} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, color, size }) => (
            focused? 
          <IconBadge
            MainElement={
              <AntDesign name='shoppingcart' color='blue' size={30} />
            }
            BadgeElement={
              <Text style={{color:'#FFFFFF'}}>{count}</Text>
            }
            IconBadgeStyle={
              {width:10,
              height:15,
              backgroundColor: '#FF00EE'}
            }
            Hidden={count==0}
            />
                    : 
            <IconBadge
              MainElement={
                <AntDesign name='shoppingcart' color='gray' size={30} />
            }
            BadgeElement={
              <Text style={{color:'#FFFFFF'}}>{count}</Text>
            }
            IconBadgeStyle={
              {width:10,
              height:15,
              backgroundColor: '#FF00EE'}
            }
            Hidden={count==0}
            />
                  ),
                }} />

        {/* Profile Screen */}
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size }) => (
            focused? <AntDesign name="profile" size={30} color="blue" /> : <AntDesign name="profile" size={30} color="gray" />
          ),
        }} />

        {/* Setting Screen */}
        <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
          tabBarLabel: 'Setting Screen',
          tabBarIcon: ({focused, color, size }) => (
            focused? <AntDesign name="setting" size={30} color="blue" /> : <AntDesign name="setting" size={30} color="gray" />
          ),
        }} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;