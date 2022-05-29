import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import registerRootComponent from 'expo/build/launch/registerRootComponent';

import store from './state';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
registerRootComponent(RNRedux);
