import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import PushNotification from 'react-native-push-notification';

import DailyScreen from './screens/dailyScreen';
import QuoteScreen from './screens/quoteScreen';
import SavedScreen from './screens/savedScreen';
import SettingsScreen from './screens/settingsScreen';

// Navigation
const AppNavigator = StackNavigator({
    Daily: { screen: DailyScreen },
    Quotes: { screen: QuoteScreen },
    Saved: { screen: SavedScreen },
    Settings: { screen: SettingsScreen }
},
{
    initialRouteName: 'Daily',
    headerMode: 'none',
})

// Notification Stuff
PushNotification.configure({
    onNotification: () => {}
});

class App extends Component {
    componentWillMount() {
        this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params});
    }
    render() {
        return (
            <AppNavigator ref={nav => this.navigator = nav } />
        );
    }
}

export default App;
