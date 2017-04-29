import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert, Share } from 'react-native';

class ShareButton extends Component {
    _onShare = () => {
        Share.share({
            message: `"${this.props.value}" - ${this.props.authorName}`,
            title: "Shared from Quotes App"
        })
        .then(() => Alert.alert(
            'Succesfully Shared'
        ))
        .catch((err) => Alert.alert(
            'Error',
            err.message
        ))
    }
    render() {
        return (
            <Icon.Button
                name="md-share-alt"
                color="white"
                size={40}
                backgroundColor="transparent"
                onPress={this._onShare}
            />
        );
    }
}

ShareButton.propTypes = {
    value: PropTypes.string,
    authorName: PropTypes.string
}

export default ShareButton;
