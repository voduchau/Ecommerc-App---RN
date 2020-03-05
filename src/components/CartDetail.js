import React, { useState, useReducer } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const reducer =(state,action)=>{
    switch (action.type) {
        case 'tang':
            return state+1;
        case 'giam':
            return state-1;
        default:
            return state;
    }

}


const CartDetail = ({item}) => {
    const [state, dispatch] = useReducer(reducer,item.count)
    return (
        <View style={styles.viewStyle}>
            {state>0?
            <>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <TouchableOpacity onPress={()=>dispatch({type:'tang'})}>
                <Text style={styles.countStyle}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.countStyle}>{state}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch({type:'giam'})}>
                <Text style={styles.countStyle}>-</Text>
            </TouchableOpacity>
            </>
            :null}
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