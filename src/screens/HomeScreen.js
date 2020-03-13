import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import ListResult from '../components/ListResult';
import PayComponent from '../components/PayComponent';
import ItemDetail from './ItemDetail';
import Cart from '../components/Cart';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = ({route,navigation}) => {
    const [result,setResult] = useState([]);
    const [itemCart,setItemCart] = useState([]);
    const [err,setErr] = useState('');

    const ChangeQuant = (id,quant,type) => {
      if(type==1){
        setItemCart(itemCart.map((item)=>{
          if(item.id == id){
            item.quantity=quant+1;
          }
          return item;
        }))
      }
      else{
        setItemCart(itemCart.map((item)=>{
          if(item.id == id){
            item.quantity=quant-1;
          }
          return item;
        }))
      }
      
    }
    
    const GetApiSearch =async (term) => {
      try {
    const data= await fetch(`https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent('new york')}&limit=${encodeURIComponent(30)}`, { 
        method: 'GET',
        headers:{
          Authorization: 'Bearer mR52djBIP4H4k6agyuQ8qkl0KgNnoN_SmVG5iw8KoLaYhP25F-EP0g7mr61Umqf2VygwuHQjbu3Sh2-oEm-uxbXcfWanU7timV89rPsrSWDwn1KeaHKw2Bi4sqlUXnYx', 
        },
      });
    const rs=await data.json();
    await setResult(rs.businesses);
      
    } 
    catch (error) {
      error?setErr('something wrong'):null;
    }}

    // gọi lần đầu render homescreen
    useEffect(() => {
      GetApiSearch('checken');
    }, [])

    useEffect(() => {
        if (route.params?.itemId) {
         ( itemCart.filter((item)=>{
            return item.id==route.params.itemId ? true:false;
          })).length!=0 ?
            setItemCart(itemCart.map((item)=>{
              if(item.id==route.params?.itemId){
                item.quantity+=route.params.quantity;
              }
              return item;
            })
            )
            :
            setItemCart([...itemCart,{id:route.params.itemId,name:route.params.itemName,price:route.params.itemPrice,quantity:route.params.quantity}])
        }
      }, [route.params?.itemId,route.params?.quantity]);


    useEffect(() => {
        if(route.params?.CountItemCart){
            const CountItemCart=route.params?.CountItemCart;
            if(itemCart.length!=0){
                CountItemCart(itemCart.length);
            }
        }
      }, [itemCart.length]);

    useEffect(() => {
        if(route.params?.GetItemToCart){
          const GetItemToCart=route.params?.GetItemToCart;
          if(itemCart.length!=0){
            GetItemToCart(itemCart);
        }
        }      
    }, [itemCart.length,route.params.quantity])
    return (
        <View style={{flex:1}}>
            {/* <RootStack.Navigator /> */}
            <ScrollView>
            <InputComponent GetApiSearch={GetApiSearch} />
            {err!='' ? <Text>{err}</Text>:null}
            <Text style={{paddingLeft:10}}>We found {result.length} products</Text>
            <ListResult navigation={navigation} name='Price $' cate='$' result={result} />
            <ListResult navigation={navigation} name='Price $$' cate='$$' result={result} />
            <ListResult navigation={navigation} name='Price $$$' cate='$$$' result={result} />
            <ListResult navigation={navigation} name='Price $$$' cate='$$$' result={result} />
            </ScrollView>
            <Cart navigation={navigation} ChangeQuant={ChangeQuant} itemCart={itemCart}/>
        </View>
    );
};

const styles=StyleSheet.create({});

export default HomeScreen;