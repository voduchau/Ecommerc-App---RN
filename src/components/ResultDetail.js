import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native';

const ResultDetail = ({item}) =>{
    return (
        <TouchableOpacity
            onPress={()=>console.log('click mee')}
        >
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <Text>{item.name}</Text>
        </View>
        </TouchableOpacity>

    );
};

const styles=StyleSheet.create({
    viewStyle:{
    },
    imageStyle:{
        marginRight:5,
        borderRadius:7,
        width:200,
        height:100,
    }
});

export default ResultDetail;