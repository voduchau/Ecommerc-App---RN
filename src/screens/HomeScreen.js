import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import InputComponent from '../components/InputComponent';

const HomeScreen = () => {
    return (
        <View>
            <InputComponent />
            <Text>This is HomeScreen</Text>
        </View>
    );
};

const styles=StyleSheet.create({});

export default HomeScreen;