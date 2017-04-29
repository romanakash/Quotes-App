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
        iconStyle={{ margin: 5, marginRight: 0, marginLeft: 30, paddingTop: 5}}
    />
);

RefreshButton.propTypes = {
    refreshClick: PropTypes.func
}

export default RefreshButton;
