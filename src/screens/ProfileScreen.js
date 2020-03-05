import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
    const { count } = route.params;
    return (
        <View>
            <Text>This is Profile Screen</Text>
        <Text>{count}</Text>
        </View>
    );
};

const styles=StyleSheet.create({});

export default ProfileScreen;