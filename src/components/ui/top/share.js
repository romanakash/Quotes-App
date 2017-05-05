import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert, Share } from 'react-native';

class ShareButton extends Component {
    _onShare = () => {
        Share.share({
            message: `"${this.props.value}" - ${this.props.authorName}`,
            title: "Shared from Quotes App"
        })
        .catch((err) => Alert.alert(
            'Error',
            err.message
        ))
    }
    render() {
        return (
            <Icon.Button
                name="share"
                color="white"
                size={25}
                backgroundColor="transparent"
                onPress={this._onShare}
                iconStyle={{marginRight: 0}}
            />
        );
    }
}

ShareButton.propTypes = {
    value: PropTypes.string,
    authorName: PropTypes.string
}

export default ShareButton;
