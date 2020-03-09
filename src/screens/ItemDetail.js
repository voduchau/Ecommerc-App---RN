import React, { useState } from 'react';
import {View,Text,StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
// import { NavigationContainer, TabActions } from '@react-navigation/native';
import { CommonActions, TabActions} from '@react-navigation/native';

const ItemDetail = ({route, navigation,navigation: { goBack },navigation: { setParams }}) => {
    const { item } = route.params;
    const [show,setShow] = useState(false);
    const [mess,setMess] = useState('');
    const [quantity,setQuantity] = useState(0);
    console.log(quantity,'quantityyyyy')
    return (
        <View>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>{item.name}</Text>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />

            <View style={{ marginVertical:20,height:30,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                <TouchableOpacity style={{flex:1,marginLeft:'28%',justifyContent:'center',flexDirection:'row',backgroundColor: '#202646',borderRadius:5}} onPress={()=>{
                    setMess('');
                    setShow(true);
                    setQuantity(quantity+1)}} > 
                    <Text style={{fontSize:28,color: '#ffffff'}}>+</Text>
                </TouchableOpacity>

                    <Text style={{fontSize:50,width:20,marginHorizontal:'7%',textAlign:'center'}}>{quantity}</Text>

                <TouchableOpacity style={{flex:1,marginRight:'37%',justifyContent:'center',flexDirection:'row',backgroundColor: '#202646',borderRadius:5}} onPress={()=>{
                    if(quantity==1){
                        setQuantity(quantity-1)
                        setShow(false);
                    }
                    else{
                        setQuantity(quantity-1)
                    }
                }}>
                    <Text style={{fontSize:28,color: '#ffffff'}}>-</Text>
                </TouchableOpacity>

            </View>
            
            {show ?
                <Button style={{marginHorizontal:'40%'}} title='Add to cart' onPress={()=>navigation.navigate('HomeScreen',{
                    quantity:quantity,
                    itemId:item.id,
                    itemName:item.name,
                    itemPrice:item.price,
                })}
                />
                :
                <Button style={{marginHorizontal:'40%'}} title='Add to cart' onPress={()=>setMess('Please choose quantity')} />
            }
            <Text style={{color:'red',fontWeight:'bold',textAlign:'center'}}>{mess == '' ? null:mess}</Text>
            
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyle:{
        marginRight:5,
        borderRadius:7,
        width:300,
        height:200,
        alignSelf:'center'
    }
});

export default ItemDetail;