import React, { Component } from 'react';
import { Alert, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

class SearchButton extends Component {
    render() {
        return (
            <Icon.Button
                name="search"
                color="white"
                size={25}
                backgroundColor="transparent"
                onPress={() => {}}
                iconStyle={{marginRight: 0}}
            />
        );
    }
}

SearchButton.propTypes = {
    value: PropTypes.string,
    authorName: PropTypes.string
}

export default SearchButton;
