import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';

import Linear from '../ui/linearGradient';
import ChangeTheme from '../ui/settings/changeTheme';
import ChangeFont from '../ui/settings/changeFont';
import ChangeNotify from '../ui/settings/changeNotify';
import TabBar from '../tabBar';

class SettingsScreen extends Component {
    renderHeader() {
        return (
            <View style={{ paddingBottom: 10 }}>
                <Text style={[styles.top_text, { textAlign: 'center', paddingRight: 10 }]}>
                    SETTINGS
                </Text>
            </View>
        );
    }
    render() {
        return (
            <Linear>
                <View style={{ flex: 0.9, marginTop: 15}}>
                    { this.renderHeader() }
                    <View style={{ marginTop: 35, marginLeft: 35, marginRight: 115 }}>
                        <ChangeTheme />
                        <ChangeFont />
                        <ChangeNotify />
                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <TabBar navigation={this.props.navigation}/>
                </View>
            </Linear>
        );
    }
}

export default SettingsScreen;
