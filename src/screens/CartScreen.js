import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import CartDetail from '../components/CartDetail';


const CartScreen = ({navigation,route}) => {
    const [itemDetail,setItem] = useState([]);
    
    useEffect(() => {
        if(route.params?.passItem){
            console.log(route.params?.passItem,'pasitemmm');
        }
        else{
        }
    },[route.params?.passItem]);
    return (
        <View>
            <Text>Cart Screen</Text>
            <FlatList
                data={itemDetail}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                // return <CartDetail changeCountItem={CallBack} item={item} />
                return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({});

export default CartScreen;