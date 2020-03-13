import React, { useState, useReducer } from 'react';
import {View,Text,StyleSheet,TouchableOpacity, addons} from 'react-native';
const CartDetail = ({item,changeCountItem}) => {
    const [countChange,setCountChange]= useState(item.count);
    return (
        <View style={styles.viewStyle}>
            <>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <TouchableOpacity onPress={()=>{
                changeCountItem(item.id,'tang');
                setCountChange(countChange+1)
            }
                }>
                <Text style={styles.countStyle}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.countStyle}>{countChange}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                changeCountItem(item.id,'giam');
                setCountChange(countChange-1)
                }
                }>
                <Text style={styles.countStyle}>-</Text>
            </TouchableOpacity>
            </>
        </View>
    );
}

const styles=StyleSheet.create({
    viewStyle:{
    flexDirection:'row',   
    alignItems:'center',
    justifyContent:'center',
    },
    nameStyle:{
        fontSize:26,
        margin:10,
    },
    countStyle:{
        fontSize:30,
        marginHorizontal:5,
        paddingHorizontal:5,
        borderWidth:2,
    }
});

export default CartDetail;