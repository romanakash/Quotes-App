import './ReactotronConfig';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";

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

Quotes = codePush(Quotes);

AppRegistry.registerComponent('Quotes', () => Quotes);
