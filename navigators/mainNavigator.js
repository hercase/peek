import React, {useState} from 'react';

import { connect } from 'react-redux';

import IconWithBadge from '../components/IconWithBadge';
import theme from '../styles';
import BarLogo from '../components/barLogo';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ReclamosView from '../views/ReclamosView';
import Search from '../views/search';
import DetailsNavigator  from './detailsNavigator';
import SignIn from '../views/signIn';
import UserMenu from '../components/UserMenu';


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
                options={{
                tabBarLabel: 'Reclamos',
                tabBarIcon:  ({ color }) => ( <IconWithBadge name="file-invoice" color={color} size={20} badge={props.values.reclamos}/> ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                tabBarLabel: 'Buscar',
                tabBarIcon: ({ color }) => ( <IconWithBadge name="search" color={color} size={20}/> ),
                }}
            />
        </Tab.Navigator>
    );
}


function HomeNavigator() {
    return (
        <Stack.Navigator
        initialRouteName="ReclamosView"     
        screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.backgroundDark,
            }
        }}
        >
            <Stack.Screen name="ReclamosView" component={ReclamosView} 
            options={{
                headerTitleAlign: 'center',
                headerTitle: () => ( <BarLogo /> ),
                headerRight: () => ( <UserMenu /> ),
            }} 
            />
            <Stack.Screen name="UserInformation" component={DetailsNavigator}
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
  
  
export default connect(mapStateToProps)(MainNavigation);
