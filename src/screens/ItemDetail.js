import React from 'react';
import {View,Text,StyleSheet, Image, Button} from 'react-native';

const ItemDetail = ({route, navigation}) => {
    const { item } = route.params;
    return (
        <View>
            <Text>{item.name}</Text>
            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
            <Button title='Add to Cart' onPress={()=>navigation.navigate('CartScreen',{},{
                type: "Navigate",
                routeName: "ItemDetail",
                params: {name:"Jo"}
            })}
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