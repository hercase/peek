import React from 'react';
import theme from '../styles';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Text } from 'react-native-paper';
import ListReclamos from './ListReclamos';

const ReclamosView = ( props ) => {
    return (
    <View >
      <View style={ styles.view_title }>
        <Text style={ styles.view_text }>Reclamos</Text>
      </View>
      <ScrollView>
        <ListReclamos {...props}/>
      </ScrollView >
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
  }
});

export default ReclamosView;