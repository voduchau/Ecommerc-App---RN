import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native';

const ResultDetail = ({item,navigation}) =>{
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ItemDetail',{
                item:item,
            })}
        >
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <Text>{item.name}</Text>
        <Text>Rating: {item.rating}* - Review: {item.review_count}</Text>
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