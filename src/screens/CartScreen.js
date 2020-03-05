import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import CartDetail from '../components/CartDetail';


const CartScreen = ({navigation,route}) => {
    const [itemDetail,setItem] = useState([]);
    const GetCountCart = ()=>{
        if(route.params){
            console.log(route.params.item,'vao true cart');
            setItem(route.params.item);
            // setItem([...itemDetail,{name:name,price:price,count:count}]);
        }
        else{
            console.log('vao false cart');
        }
    }
    useEffect(() => {
        GetCountCart();
    }, []);
    return (
        <View>
            <Text>Payment</Text>
            <FlatList
                data={itemDetail}
                keyExtractor={item=>item.name}
                renderItem={({item})=>{
                return <CartDetail item={item} />
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({});

export default CartScreen;