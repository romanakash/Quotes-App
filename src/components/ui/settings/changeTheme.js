import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import ThemeSwiper from './themeSwiper';
import changeGradient from '../../themes/changeGradient';

class ChangeTheme extends Component {
    state = {
        modal: false
    }
    _showModal = () => this.setState({ modal: true })
    _hideModal = () => this.setState({ modal: false })

    onClose = (type) => {
        this._hideModal();
        changeGradient(type);
    }
    renderModal() {
        return (
            <Modal isVisible={this.state.modal}
                backdropOpacity={0.3}
                animationIn="pulse"
                animationOut="fadeOut"
                style={{ margin: 50, marginLeft: 40, marginRight: 40 }}
            >
                <ThemeSwiper onClose={this.onClose}/>
            </Modal>
        );
    }
    render() {
        return (
            <View style={styles.settings_container}>
                <Icon.Button size={24}
                    color="white"
                    name="md-color-fill"
                    backgroundColor="transparent"
                    iconStyle={{marginRight: 5}}
                >
                    <TouchableOpacity onPress={this._showModal}>
                        <Text style={styles.settings_text}>
                            Change Theme
                        </Text>
                    </TouchableOpacity>
                </Icon.Button>
                { this.renderModal() }
            </View>
        );
    }
}

export default ChangeTheme;
