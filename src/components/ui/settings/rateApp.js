import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RateApp extends Component {
    render() {
        return (
            <View style={styles.settings_container}>
                <Icon.Button size={24}
                    color="white"
                    name="star-half"
                    backgroundColor="transparent"
                    iconStyle={{marginRight: 5}}
                >
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.settings_text}>
                            Rate this app!
                        </Text>
                    </TouchableOpacity>
                </Icon.Button>
            </View>
        );
    }
}

export default RateApp;
