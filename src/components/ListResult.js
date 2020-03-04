import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
const ListResult = ({name,result,cate}) => {
    const a = result.filter((item)=>{
        return item.price==cate;
    });
    let getTitle;
    a.length >0 ? getTitle=name:null;
    
    
    return (
        <View style={styles.viewStyle   } >
            <Text style={styles.nameStyle}>
                {getTitle}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatStyle}
                data={a}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                return <ResultDetail item={item} />
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    viewStyle:{
    },
    flatStyle:{
        flexDirection:'row',
    },
    nameStyle:{
        fontSize:30,
        paddingLeft:6,
    },

})

export default ListResult;