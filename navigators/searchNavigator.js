import React from 'react';

import { connect } from 'react-redux';
import { setHide } from '../redux/actions/index';
import { withTheme } from 'react-native-paper';
import { StyleSheet} from 'react-native';

import BarLogo from '../components/barLogo';
import theme from '../styles';

import { createStackNavigator } from '@react-navigation/stack';

import Search from '../views/search'
import DetailsNavigator  from './detailsNavigator';

const Stack = createStackNavigator();

function SearchNavigator( props ) {
  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.backgroundDark,
          }
        }}
      >
          <Stack.Screen name="Search" component={Search} 
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => ( <BarLogo /> ),
          }}
          /> 

          <Stack.Screen name="UserInformation" component={DetailsNavigator}
          initialParams={props.route} 
          options={{ 
              headerTintColor:'white',
              headerTitle: 'Informacion del usuario',
              }} 
          />

      </Stack.Navigator>
  );
}
const styles = StyleSheet.create({

  });

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}


export default connect(mapStateToProps, {setHide})(withTheme(SearchNavigator));