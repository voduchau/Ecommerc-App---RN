import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const PayComponent = ({CountItem,navigation,item}) => {
    return (
        <View>
            <Text> You have {CountItem} product</Text>
            <Button title='Pay' onPress={()=>navigation.navigate('CartScreen',{
                item:item,
            })}/>
        </View>
        
    );
};

const styles=StyleSheet.create({});

export default PayComponent;