import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
const ListResult = ({name,result,cate}) => {
    const a = result.filter((item)=>{
        return item.price==cate;
    });
    let getName;
    a.length >0 ? getName=name:null;
    
    
    return (
        <View>
            <Text style={styles.nameStyle}>
                {getName}
            </Text>
            <FlatList 
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
    nameStyle:{
        fontSize:30,
        paddingLeft:6,
    },

})

export default ListResult;