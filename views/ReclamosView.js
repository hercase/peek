import React from 'react';
import theme from '../styles';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Text } from 'react-native-paper';
import ListReclamos from './ListReclamos';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const ReclamosView = ( props ) => {

    return (
    <View >
      <View style={ styles.view_title }>
        <Text style={ styles.view_text }>Reclamos</Text>
        <Icon 
          style={ styles.view_icon } 
          name='sync' 
          size={20} 
          color={ theme.colors.disabled } 
        />
      </View>
        <View style={{ flex: 0}} >
        <ScrollView>
          <ListReclamos data={props}/>
        </ScrollView >
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  view_title: {
    backgroundColor: theme.colors.backdrop,
    marginBottom: 0, 
    paddingVertical: 15,
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view_text: {
    color: theme.colors.disabled,
    fontSize: 19,
    fontFamily: 'Roboto',
  },
  view_icon: {
    display:'flex',
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default ReclamosView;