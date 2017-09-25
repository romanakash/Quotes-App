import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import removeSavedQuotes from '../../../realm/updates/removeSavedQuotes';

const RemoveSaved = () => (
    <View style={styles.settings_container}>
        <Icon.Button size={24}
            color="white"
            name="remove-circle-outline"
            backgroundColor="transparent"
            iconStyle={{marginRight: 5}}
        >
            <TouchableOpacity onPress={() => removeSavedQuotes()}>
                <Text style={styles.settings_text}>
                    Remove All Saved Quotes
                </Text>
            </TouchableOpacity>
        </Icon.Button>
    </View>
);

export default RemoveSaved;
