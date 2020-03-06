import React, { useState } from 'react';
import IconBadge from 'react-native-icon-badge';
import { View, Text, StyleSheet} from 'react-native';

const SettingScreen = () => {
 const [state,setState] = useState(2);
    return (
        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <View style={{backgroundColor:'#489EFE',
        width:50,
        height:50,
        margin:6
      }}/>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>{state}</Text>
    }
    IconBadgeStyle={
      {width:30,
      height:30,
      backgroundColor: '#FF00EE'}
    }
    Hidden={state==0}
    />
</View>
    );
};

const styles=StyleSheet.create({});

export default SettingScreen;