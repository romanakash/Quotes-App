import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import FontSwiper from './fontSwiper';
import changeQuoteFamily from '../../themes/changeQuoteFamily';

class ChangeFont extends Component {
    state = {
        modal: false
    }
    _showModal = () => this.setState({ modal: true })
    _hideModal = () => this.setState({ modal: false })

    onClose = (font) => {
        this._hideModal();
        changeQuoteFamily(font);
    }
    renderModal() {
        return (
            <Modal isVisible={this.state.modal}
                backdropOpacity={0.3}
                animationIn="pulse"
                animationOut="fadeOut"
                style={{ margin: 50, marginLeft: 40, marginRight: 40 }}
            >
                <FontSwiper onClose={this.onClose}/>
            </Modal>
        );
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._showModal}
                    style={{marginBottom: 25, flexDirection: 'row'}}
                >
                    <Icon size={24} color="white" name="text-fields" />
                    <Text style={styles.settings_text}>
                        Change Font
                    </Text>
                </TouchableOpacity>
                { this.renderModal() }
            </View>
        );
    }
}

export default ChangeFont;
