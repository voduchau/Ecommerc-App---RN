import React, { useState } from 'react';
import {View,Text,StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { CommonActions} from '@react-navigation/native';

const ItemDetail = ({route, navigation,navigation: { goBack },navigation: { setParams }}) => {
    const { item } = route.params;
    const [count,setCount] = useState(0);

    return (
        <View>
            <Text>{item.name}</Text>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <TouchableOpacity onPress={()=>setCount(count+1)} > 
                <Text style={{fontSize:50}}>+</Text>
            </TouchableOpacity>
                <Text style={{fontSize:50}}>{count}</Text>
            <TouchableOpacity onPress={()=>setCount(count-1)}> 
                <Text style={{fontSize:50}}>-</Text>
            </TouchableOpacity>
            <Button title='Add to Cart' onPress={()=>navigation.dispatch(
                CommonActions.navigate({
                    name:'HomeScreen',
                    params:{
                        count:count,
                    }
                })
            )}
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