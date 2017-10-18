import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import quotesRealm from '../realm/quotesRealm';
import getInitialQuotes from '../api/getInitialQuotes';
import getDailyQuotes from '../api/getDailyQuotes';
import seedSettings from '../realm/seed/seedSettings';
import checkForNewMonth from '../realm/checkForNewMonth';

import OnboardingScreen from './onboarding';

// Navigation stuff
import DailyScreen from './screens/dailyScreen';
import QuoteScreen from './screens/quoteScreen';
import SavedScreen from './screens/savedScreen';
import SettingsScreen from './screens/settingsScreen';

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

class Main extends Component {
    componentWillMount() {
        this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params}); // eslint-disable-line no-undef
    }
    render() {
        return (
            <AppNavigator ref={nav => this.navigator = nav } />
        );
    }
}

class App extends Component {
    state = {
        firstLaunch: null
    }
    componentWillMount() {
        let settings = quotesRealm.objects('Settings');      // seed settings
        if (settings.length < 1) {
            seedSettings();
        }
        let quotes = quotesRealm.objects('Quote');           // seed quotes
        if (quotes.length < 1) {
            getInitialQuotes();
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('onboarding').then((value) => {
            if (value === null) {
                this.setState({ firstLaunch: true })
                AsyncStorage.setItem('onboarding', 'done').done();
            }
            else {
                this.setState({ firstLaunch: false })
            }
        })
    }
    changeState = () => {
        this.setState({ firstLaunch: false })
    }
    render() {
        switch (this.state.firstLaunch) {
            case false:
                return <Main />
            case true:
                return <OnboardingScreen changeState={this.changeState}/>
            default:
                return null
        }
    }
}

export default App;
