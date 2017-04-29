import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Reactotron from 'reactotron-react-native';
import moment from 'moment';

class ChangeNotify extends Component {
    state = {
        picker: false,
    }

    _showPicker = () => this.setState({ picker: true });
    _hidePicker = () => this.setState({ picker: false });

    _handleTime = (time) => {
        Reactotron.log(time)
        this._hidePicker();
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._showPicker}
                    style={{marginBottom: 25, flexDirection: 'row'}}
                >
                    <Icon size={24} color="white" name="notifications" />
                    <Text style={styles.settings_text}>
                        Notification Timing
                    </Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.picker}
                    onConfirm={this._handleTime}
                    onCancel={this._hidePicker}
                />
            </View>
        );
    }
}

export default ChangeNotify;
