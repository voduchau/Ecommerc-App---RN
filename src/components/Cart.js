import React,{useState} from 'react';
import IconBadge from 'react-native-icon-badge';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cart = ({itemCart,navigation,ChangeQuant}) => {
    console.log(itemCart,'item cartt');
    return (
        <View style={{bottom:0,right:0,flexDirection: 'row',position:'absolute',alignItems: 'center',justifyContent: 'flex-end',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('CartScreen',
                            {
                                item:itemCart,
                                ChangeQuant:ChangeQuant,
                            }
                        )}>
                <IconBadge
                MainElement={
            <View style={{
                borderWidth:2,
                borderColor:'gray',
                borderRadius:10,
                width:60,
                height:60,
                margin:6
            }}>
                <AntDesign name='shoppingcart' color='gray' size={50} />
            </View>
            }
            BadgeElement={
            <Text style={{color:'#FFFFFF'}}>{itemCart.length}</Text>
            }
            IconBadgeStyle={
            {width:23,
            height:23,
            backgroundColor: '#FF00EE'}
            }
            Hidden={itemCart.length==0}
            />
        </TouchableOpacity>
  
    </View>
    );
};

const styles=StyleSheet.create({
});

export default Cart;