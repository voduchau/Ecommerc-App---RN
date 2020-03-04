import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CartScreen = () => {
    const [item,setItem] = useState([]);
    return (
        <View>
            <Text>This is Cart Screen</Text>
        </View>
    );
};

const styles=StyleSheet.create({});

export default CartScreen;