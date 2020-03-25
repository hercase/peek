import React, {useState} from 'react';
import { connect } from 'react-redux';

import theme from '../styles';
import { StyleSheet, View, ScrollView, ActivityIndicator  } from 'react-native';

import { Text } from 'react-native-paper';
import ListReclamos from './ListReclamos';

const ReclamosView = ( props ) => {

    return (
    <View >
      <View style={ styles.view_title }>
        <Text style={ styles.view_text }>Reclamos</Text>    
        { !props.values.hide &&
          <ActivityIndicator size="small" 
            color={theme.colors.disabled}
          />
        }
      </View>
      <ScrollView>
        <ListReclamos {...props}/>
      </ScrollView>
    </View>
    );
  }

const styles = StyleSheet.create({
  view_title: {
    backgroundColor: theme.colors.backgroundLight,
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

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps)(ReclamosView);
