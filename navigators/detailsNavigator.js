import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import UserDetails from '../views/userDetails';
import TechnicalDetails from '../views/technicalDetails';
import UserHeader from '../components/user-header';
import HistoryDetails from '../views/historyDetails';
import ServicesDetails from '../views/servicesDetails';

import theme from '../styles';
const Tab = createMaterialTopTabNavigator();

 function DetailsNavigator(props) {
  return (
      <>
          <UserHeader/>
          <Tab.Navigator
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                labelStyle: { fontSize: 12 },
                indicatorStyle: { backgroundColor: theme.colors.primary },
                activeTintColor: theme.colors.primary,
                inactiveTintColor: theme.colors.disabled,
              }}
          >
                <Tab.Screen name="Detalles" component={UserDetails} initialParams={props.route.params}
                    options={{
                        tabBarIcon: ({ color }) => ( <Icon name="map-marker-alt" color={color} size={23} /> ),
                        }}
                />
                <Tab.Screen name="Datos Técnicos" component={TechnicalDetails}  initialParams={props.route.params}
                    options={{
                        tabBarIcon: ({ color }) => ( <Icon name="tools" color={color} size={23} /> ),
                        }} 
                />
                <Tab.Screen name="Historial" component={HistoryDetails}  initialParams={props.route.params} 
                    options={{
                        tabBarIcon: ({ color }) => ( <Icon name="history" color={color} size={23} /> ),
                        }}
                />
                <Tab.Screen name="Servicios" component={ServicesDetails}  initialParams={props.route.params} 
                    options={{
                        tabBarIcon: ({ color }) => ( <Icon name="list-alt" color={color} size={23} /> ),
                        }}
                />
          </Tab.Navigator>
      </>
  );
}
export default DetailsNavigator;