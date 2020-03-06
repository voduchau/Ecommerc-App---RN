import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import ListResult from '../components/ListResult';
import PayComponent from '../components/PayComponent';
import ItemDetail from './ItemDetail';
const HomeScreen = ({route,navigation}) => {
    const [result,setResult] = useState([]);
    const [itemCart,setItemCart] = useState([]);
    const GetApiSearch =async (term) => {   
        const data= await fetch(`https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent('new york')}&limit=${encodeURIComponent(30)}`, { 
            method: 'GET', 
            headers:{
              Authorization: 'Bearer mR52djBIP4H4k6agyuQ8qkl0KgNnoN_SmVG5iw8KoLaYhP25F-EP0g7mr61Umqf2VygwuHQjbu3Sh2-oEm-uxbXcfWanU7timV89rPsrSWDwn1KeaHKw2Bi4sqlUXnYx', 
            },
          });
        const rs=await data.json();
        await setResult(rs.businesses);
    }
    useEffect(() => {
        if (route.params?.itemId) {
          setItemCart([...itemCart,{id:route.params.itemId,name:route.params.itemName,price:route.params.itemPrice,quantity:route.params.quantity}])
        }
        else
        {
        }
      }, [route.params?.itemId]);
      useEffect(() => {
        if(route.params?.CountItemCart){
            const CountItemCart=route.params?.CountItemCart;
            if(itemCart.length!=0){
                CountItemCart(itemCart.length);
            }
        }
      }, [itemCart.length])
    return (
        <ScrollView>
        <View>
            {/* <RootStack.Navigator /> */}
            <InputComponent GetApiSearch={GetApiSearch} />
            <Text style={{paddingLeft:10}}>We found {result.length} products</Text>
            <ListResult navigation={navigation} name='Price $' cate='$' result={result} />
            <ListResult navigation={navigation} name='Price $$' cate='$$' result={result} />
            <ListResult navigation={navigation} name='Price $$$' cate='$$$' result={result} />
            {/* <PayComponent navigation={navigation} changeCountItem={changeCountItem}  item={countItem} CountItem={countItem.length} /> */}
        </View>
        </ScrollView>
    );
};

const styles=StyleSheet.create({});

export default HomeScreen;