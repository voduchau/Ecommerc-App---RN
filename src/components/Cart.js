import React,{useState} from 'react';
import IconBadge from 'react-native-icon-badge';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cart = ({itemCart,navigation,ChangeQuant}) => {
    return (
        <View style={{bottom:5,right:5,flexDirection: 'row',position:'absolute',alignItems: 'center',justifyContent: 'flex-end',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('CartScreen',
                            {
                                item:itemCart,
                                ChangeQuant:ChangeQuant,
                            }
                        )}>
                <IconBadge
                MainElement={
            <View style={{
                borderWidth:3,
                borderColor:'blue',
                borderRadius:10,
                width:60,
                height:60,
                margin:6,
                backgroundColor:'yellow'
            }}>
                <AntDesign name='shoppingcart' color='blue' size={50} />
            </View>
            }
            BadgeElement={
            <Text style={{color:'#FFFFFF'}}>{itemCart.length}</Text>
            }
            IconBadgeStyle={
            {width:25,
            height:25,
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