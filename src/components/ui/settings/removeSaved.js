import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import removeSavedQuotes from '../../../realm/updates/removeSavedQuotes';

const RemoveSaved = () => (
    <View style={styles.settings_container}>
        <Icon.Button size={24}
            color="white"
            name="remove-circle-outline"
            onPress={() => removeSavedQuotes()}
            backgroundColor="transparent"
            iconStyle={{marginRight: 5}}
        >
            <Text style={styles.settings_text}>
                Remove All Saved Quotes
            </Text>
        </Icon.Button>
    </View>
);

export default RemoveSaved;
