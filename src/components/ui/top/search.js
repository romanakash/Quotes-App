import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const SearchButton = ({ searchClick }) => (
    <Icon.Button
        name="search"
        color="white"
        size={25}
        backgroundColor="transparent"
        onPress={searchClick}
        iconStyle={{ marginRight: 0, paddingTop: 5 }}
    />
);


SearchButton.propTypes = {
    searchClick: PropTypes.func
}

export default SearchButton;
