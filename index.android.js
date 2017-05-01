import './ReactotronConfig';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import './src/api/init';                    // init for hapi api
import './src/realm/realmInit';             // init for realm

// Init Notificaitons
import initNotifications from './src/initNotifications';
initNotifications();  

import './src/components/themes/default';   // init for theme

import App from './src/components/app';

export default class Quotes extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('Quotes', () => Quotes);
