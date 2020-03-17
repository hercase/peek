import React, {useState} from 'react';

import { connect } from 'react-redux';
import { setHide } from '../redux/actions/index';

import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles';
import BarLogo from '../components/barLogo';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import ReclamosView from '../views/ReclamosView';
import SearchNavigator  from './searchNavigator';
import DetailsNavigator  from './detailsNavigator';
import SignIn from '../views/signIn';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainNavigation(props) {
 
    return (
        <NavigationContainer >
            {props.values.token !== "" ?
            <TabNavigation data= {props} />
            : <SignIn />
        }
        </NavigationContainer>
    );
}

function TabNavigation(props) {
    return (
            <Tab.Navigator
            initialRouteName="Reclamos"
            activeColor="#fff"
            inactiveColor="#95a5a6"
            barStyle={{ backgroundColor: theme.colors.backgroundDark }}
            shifting={true}
            >
            <Tab.Screen 
                name="Reclamos"
                component={HomeNavigator}
                options={{
                tabBarLabel: 'Reclamos',
                tabBarIcon: ({ color }) => ( <Icon name="file-invoice" color={color} size={20} /> ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                tabBarLabel: 'Buscar',
                tabBarIcon: ({ color }) => ( <Icon name="search" color={color} size={20} /> ),
                }}
            />
        </Tab.Navigator>
    );
}


function HomeNavigator( props) {

    
    return (
        <Stack.Navigator          
        screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.backgroundDark,

            }
          }}
        >
            <Stack.Screen name="ReclamosView" component={ReclamosView} initialParams={props} 
            options={{
                navigation: props, 
                headerTitleAlign: 'center',
                headerTitle: () => ( <BarLogo /> ),
            }} 
            />
            <Stack.Screen name="UserInformation" component={DetailsNavigator}
                initialParams={props.route} 
                options={{ 
                    headerTintColor:'white',
                    headerTitle: 'Informacion del usuario',
            }} />
        </Stack.Navigator>
    );
}

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
}
  
  
export default connect(mapStateToProps, {setHide})(MainNavigation);
