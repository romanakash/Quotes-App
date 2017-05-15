import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const MenuButton = ({ menuClick }) => (
    <Icon.Button
        name="ios-menu-outline"
        color="white"
        size={30}
        backgroundColor="transparent"
        onPress={menuClick}
        iconStyle={{marginRight: 0}}
    />
);

MenuButton.propTypes = {
    menuClick: PropTypes.func
}

export default MenuButton;
