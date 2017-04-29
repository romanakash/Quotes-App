import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuButton = ({ menuClick }) => (
    <Icon.Button
        name="ios-menu-outline"
        color="white"
        size={30}
        backgroundColor="transparent"
        onPress={menuClick}
        iconStyle={{ margin: 5, marginRight: 0}}
    />
);

MenuButton.propTypes = {
    menuClick: PropTypes.func
}

export default MenuButton;
