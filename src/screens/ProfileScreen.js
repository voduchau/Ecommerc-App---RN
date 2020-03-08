import React from 'react';
import IconBadge from 'react-native-icon-badge';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet} from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
    return (
        <View>
                <IconBadge
            MainElement={
              <AntDesign name='shoppingcart' color='blue' size={30} />
            }
            BadgeElement={
              <Text style={{color:'#FFFFFF'}}>{2}</Text>
            }
            IconBadgeStyle={
              {width:10,
              height:15,
              backgroundColor: '#FF00EE'}
            } />
        </View>
    );
};

const styles=StyleSheet.create({});

export default ProfileScreen;