import './ReactotronConfig';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';


import './src/realm/quotesRealm';      // defines schema and inits quotesRealm
import './src/api/init';                    // init for mongodb stitch

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
