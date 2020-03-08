import React, { useState } from 'react';
import IconBadge from 'react-native-icon-badge';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowCartDetail = ({ item,ChangeQuant }) => {
    const [count,setCount] = useState(item.quantity);
    // console.log(ChangeQuant,'ChangeQuantChangeQuantChangeQuant')
    return (
        <>
        <View style={styles.viewStyle}>
            <View style={styles.ViewName}>
                <Text style={styles.nameStyle}>{item.name}</Text>
            </View>
            <View style={styles.ViewQuantity}>
                <TouchableOpacity onPress={()=>{
                    setCount(count+1);
                    ChangeQuant(item.id,count,1);
                    }} >
                    <Text  style={styles.quantityStyle}>+</Text>
                </TouchableOpacity>
                <Text style={{fontSize:25,marginHorizontal:5}}>{count}</Text>
                <TouchableOpacity onPress={()=>{
                    setCount(count-1);
                    ChangeQuant(item.id,count,0);
                   }}>
                    <Text  style={styles.quantityStyle}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text>------------------------------------------------------------------------------------------------</Text>
        </View>
        </>
    );
};

const styles=StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
    },
    ViewName:{
        width:'70%',
    }
    ,
    ViewQuantity:{
        flexDirection:'row',
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
    },
    nameStyle:{
        fontSize:25,
        margin:3,
    },
    quantityStyle:{
        fontSize:25,
        borderWidth:2,
        borderColor:'gray',
        // margin:3,
        alignContent:'center',
        paddingHorizontal:5,
        borderRadius:10,
    },
});

export default ShowCartDetail;