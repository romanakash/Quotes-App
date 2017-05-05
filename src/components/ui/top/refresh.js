import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RefreshButton = ({ refreshClick }) => (
    <Icon.Button
        name="refresh"
        color="white"
        size={27}
        backgroundColor="transparent"
        onPress={refreshClick}
        iconStyle={{marginRight: 0}}
    />
);

RefreshButton.propTypes = {
    refreshClick: PropTypes.func
}

export default RefreshButton;
