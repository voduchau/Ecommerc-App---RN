import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import ShowCartDetail from '../components/ShowCartDetail';
import CartDetail from '../components/CartDetail';


const CartScreen = ({item,navigation,route,ChangeQuant}) => {
    // console.log(ChangeQuant,'ChangeQuantChangeQuantChangeQuant');
    const [itemCart,setItem] = useState([]);
    useEffect(() => {
        if(route.params?.item){
            setItem(route.params?.item);
        }
      }, [route.params?.item]);
    //   console.log(itemCart,'item carrrtt');
    return (
        <View>
            <Text>Cart Screen</Text>
            <FlatList 
                data={itemCart}
                keyExtractor={item => item.id}
                renderItem={({item})=>{
                return <ShowCartDetail ChangeQuant={route.params?.ChangeQuant} item={item} />
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({});

export default CartScreen;