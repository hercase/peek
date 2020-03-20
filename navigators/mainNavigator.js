import React, {useState} from 'react';

import { connect } from 'react-redux';
import { setHide, setLinea, setReclamo } from '../redux/actions/index';


import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles';
import BarLogo from '../components/barLogo';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import ReclamosView from '../views/ReclamosView';
import Search from '../views/search';
import UserDetails from '../views/userDetails';
import SearchNavigator  from './searchNavigator';
import DetailsNavigator  from './detailsNavigator';
import SignIn from '../views/signIn';
import search from '../views/search';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function MainNavigation(props) {
    return (
        <NavigationContainer >
            {props.values.token !== "" ?
            <TabNavigation {...props} />
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
                initialParams={props} 
                options={{
                tabBarLabel: 'Reclamos',
                tabBarIcon: ({ color }) => ( <Icon name="file-invoice" color={color} size={20} /> ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                initialParams={props} 
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
        initialRouteName="ReclamosView"          
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
                initialParams={props} 
                options={{ 
                    headerTintColor:'white',
                    headerTitle: 'Informacion del usuario',
            }} />
            
            <Stack.Screen name="Search" component={Search} 
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => ( <BarLogo /> ),
          }}
          /> 

        </Stack.Navigator>
    );
}

const mapStateToProps = ( state ) => {
    return {
        values : state.teleReducer
    }
}
  
  
export default connect(mapStateToProps, {setHide, setLinea, setReclamo})(MainNavigation);
