import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

const InputComponent = ({GetApiSearch}) => {
    const [term,setTerm] = useState('');
    return (
        <View style={styles.viewStyle}>
            <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
            <TextInput
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder={'Search'} 
                onChangeText={Text => setTerm(Text)}
                onEndEditing={()=>GetApiSearch(term)}
            />
        </View>

    );
};

const styles=StyleSheet.create({
    inputStyle:{
        fontSize:18,
        flex:1,
        marginLeft:3,
    },
    viewStyle:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'gray',
        borderRadius:8,
        marginHorizontal:10,
        marginVertical:10,
    },
    iconStyle: {
        marginLeft:3,
        alignSelf:'center',
    }
});

export default InputComponent;