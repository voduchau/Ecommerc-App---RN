import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import CartDetail from '../components/CartDetail';


const CartScreen = ({navigation,route}) => {
    const [itemDetail,setItem] = useState([]);
    const GetCountCart = ()=>{
        if(route.params){
            setItem(route.params.item);
        }
        else{
            console.log('vao false cart');
        }
    };
    const CallBack = (id,type) =>{
        console.log('vao call backkk');
        if(route.params){
            console.log(route.params.changeCountItem,'this is changeCountItem');
            return route.params.changeCountItem(id,type);
        }
    }
    useEffect(() => {
        GetCountCart();
        CallBack();
    }, []);
    return (
        <View>
            <Text>Payment</Text>
            <FlatList
                data={itemDetail}
                keyExtractor={item=>item.name}
                renderItem={({item})=>{
                return <CartDetail changeCountItem={CallBack} item={item} />
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({});

export default CartScreen;