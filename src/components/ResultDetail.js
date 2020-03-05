import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native';

const ResultDetail = ({item,navigation,route,GetCount}) =>{
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ItemDetail',{
                item:item,
                GetCount:GetCount,
            })}
        >
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <Text>{item.name}</Text>
        <Text>Rating: {item.rating}* - Review: {item.review_count}</Text>
        {/* <Text>{count}</Text> */}
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