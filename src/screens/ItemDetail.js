import React, { useState } from 'react';
import {View,Text,StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
// import { NavigationContainer, TabActions } from '@react-navigation/native';
import { CommonActions, TabActions} from '@react-navigation/native';

const ItemDetail = ({route, navigation,navigation: { goBack },navigation: { setParams }}) => {
    const { item } = route.params;
    const [quantity,setQuantity] = useState(0);
    return (
        <View>
            <Text>{item.name}</Text>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <TouchableOpacity onPress={()=>setQuantity(quantity+1)} > 
                <Text style={{fontSize:50}}>+</Text>
            </TouchableOpacity>
                <Text style={{fontSize:50}}>{quantity}</Text>
            <TouchableOpacity onPress={()=>setQuantity(quantity-1)}> 
                <Text style={{fontSize:50}}>-</Text>
            </TouchableOpacity>
            <Button title='Add to Cart' onPress={()=>navigation.navigate('HomeScreen',{
                quantity:quantity,
                itemId:item.id,
                itemName:item.name,
                itemPrice:item.price,
            })
                // GetCount(item.name,item.price,count,item.id),

            }
            />
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyle:{
        marginRight:5,
        borderRadius:7,
        width:200,
        height:100,
    }
});

export default ItemDetail;