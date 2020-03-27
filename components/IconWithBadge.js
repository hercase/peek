import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles';
import { View, Text } from 'react-native';

function IconWithBadge( props ) {
  return ( 
    <View style={{ width: 24, height: 24 }}>
    <Icon name={props.name} color={props.color} size={props.size} /> 
      { props.badge > 0 && (
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: -3,
            backgroundColor: theme.colors.primary,
            borderRadius: 6,
            width: 15,
            height: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: theme.colors.background, fontSize: 10, fontWeight: 'bold' }}>
            {props.badge}
          </Text>
        </View>
      )}
    </View>
  )
}

export default IconWithBadge;