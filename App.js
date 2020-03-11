import React, { useState,useEffect } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import CartScreen from './src/screens/CartScreen';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from './src/screens/StackHome';
import IconBadge from 'react-native-icon-badge';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View,Text,TouchableOpacity} from 'react-native';
//import login screen
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  //state chưa item trong cart , được gọi từ homescreen về
  const [item,setItem]= useState([]);
  // item = [{'id':1,'name':'food','quantity':12,'price':20}]

  const [count,setCount] = useState(0);
  const [c,setC] = useState(9);
  // console.log(count,'ths is countd');
  // hàm đếm số lượng item từ ItemDetail truyền qua để show vào tab navigation
  const CountItemCart = (countItem) =>{
    setCount(countItem);
  }

  //hàm lấy tất cả item từ Homescreen truyền lên
  const  GetItemToCart = (item2) =>{
     setItem(item2);
  }

  const passItem =()=>{
    console.log('vao pass item');
  }
  return(
    <NavigationContainer>
      <Tab.Navigator>
        {/* Home Screen */}
        {/* {item === undefined || item.length == 0 ?item:passItem()} */}
        <Tab.Screen initialParams={{CountItemCart:CountItemCart,GetItemToCart:GetItemToCart}} name="StackHome" component={StackHome} i options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({focused, color, size }) =>( 
           focused ? <AntDesign name="home" size={30} color="blue" /> : <AntDesign name="home" size={30} color="gray" />
          ),
        }} />

        {/* Cart Screen */}
        {/* <Tab.Screen initialParams={{item:item}}  name="CartScreen" component={CartScreen} options={{
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
              }      } /> */}
        
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

        {/* Login Screen */}
        <Tab.Screen name="LoginScreen" component={LoginScreen} options={{
          tabBarLabel: 'LoginScreen Screen',
          tabBarIcon: ({focused, color, size }) => (
            focused? <AntDesign name="login" size={30} color="blue" /> : <AntDesign name="login" size={30} color="gray" />
          ),
        }} />

        {/* SignUp Screen */}
        <Tab.Screen name="SignUpScreen" component={SignUpScreen} options={{
          tabBarLabel: 'SignUpScreen Screen',
          tabBarIcon: ({focused, color, size }) => (
            focused? <AntDesign name="registered" size={30} color="blue" /> : <AntDesign name="registered" size={30} color="gray" />
          ),
        }} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;