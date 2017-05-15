import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import getNotificationDate from '../../../data/getNotificationDate';
import changeNotificationTime from '../../../realm/updates/changeNotificationTime';

class ChangeNotify extends Component {
    state = {
        picker: false,
    }

    _showPicker = () => this.setState({ picker: true });
    _hidePicker = () => this.setState({ picker: false });

    _handleTime = (date) => {
        let formatTime = moment(date).format("H:m");
        changeNotificationTime(formatTime);
        this._hidePicker();
    }
    render() {
        return (
            <View style={styles.settings_container}>
                <Icon.Button size={24}
                    color="white"
                    name="notifications"
                    onPress={this._showPicker}
                    backgroundColor="transparent"
                    iconStyle={{marginRight: 5}}
                >
                    <Text style={styles.settings_text}>
                        Notification Time {'\t'}
                        {moment(getNotificationDate()).format('hh : mm')}
                    </Text>
                </Icon.Button>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.picker}
                    onConfirm={this._handleTime}
                    onCancel={this._hidePicker}
                    date={getNotificationDate()}
                />
            </View>
        );
    }
}

export default ChangeNotify;
