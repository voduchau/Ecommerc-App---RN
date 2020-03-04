import React from 'react';
import {Text,View, StyleSheet,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ResultDetail = ({item}) =>{
    return (
        <View style={styles.viewStyle}>
            
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <Text>{item.name}</Text>
        </View>

    );
};

const styles=StyleSheet.create({
    viewStyle:{
        margin:5,
    },
    imageStyle:{
        width:200,
        height:100,
    }
});

export default ResultDetail;