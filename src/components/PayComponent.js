import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { CommonActions} from '@react-navigation/native';

const PayComponent = ({CountItem,navigation,item,changeCountItem}) => {
    console.log(item,'vao paycomponent');
    return (
        <View>
            <Text> You have {CountItem} product</Text>
            <Button title='Pay' onPress={()=>navigation.navigate('CartScreen',{
                item:item,
                changeCountItem:changeCountItem,
            })}/>
        </View>
        
    );
};

const styles=StyleSheet.create({});

export default PayComponent;