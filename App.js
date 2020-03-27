/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import theme from './styles'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';

import {  Provider as PaperProvider } from 'react-native-paper';

import MainNavigation from './navigators/mainNavigator';
import SignIn from './views/signInView';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.backgroundDark} />
          <MainNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;

