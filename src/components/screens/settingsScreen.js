import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';

import Linear from '../ui/linearGradient';
import ChangeTheme from '../ui/settings/changeTheme';
import ChangeFont from '../ui/settings/changeFont';
import RateApp from '../ui/settings/rateApp';
import RemoveSaved from '../ui/settings/removeSaved';
import TabBar from '../tabBar';

class SettingsScreen extends Component {
    renderHeader() {
        return (
            <View style={{ paddingBottom: 10 }}>
                <Text style={styles.top_text}>
                    SETTINGS
                </Text>
            </View>
        );
    }
    renderLogo() {
        return (
            <View>
                <Text style={{
                    fontFamily: 'Code-Light',
                    fontSize: 40,
                    color: 'white',
                    textAlign: 'center',
                }}>
                    QUOTES
                </Text>
                <Text style={{
                    fontFamily: 'Quicksand-Light',
                    textAlign: 'center',
                    marginBottom: 65,
                    color: 'white'
                }}>
                    v1.0.0
                </Text>
            </View>
        );
    }
    render() {
        return (
            <Linear>
                <View style={{ flex: 0.9, marginTop: 15}}>
                    { this.renderHeader() }
                    <View style={{ flex: 1, marginTop: 35, marginLeft: 25, marginRight: 20 }}>
                        <ChangeTheme />
                        <ChangeFont />
                        <RemoveSaved />
                        <RateApp />
                    </View>
                    {this.renderLogo()}
                </View>
                <View style={{ flex: 0.1 }}>
                    <TabBar navigation={this.props.navigation}/>
                </View>
            </Linear>
        );
    }
}

SettingsScreen.propTypes = {
    navigation: PropTypes.object
}

export default SettingsScreen;
