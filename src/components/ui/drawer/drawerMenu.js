import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from 'react-native-theme';

import tagsDict from '../../../data/tags'

class DrawerMenu extends Component {
    renderCategories() {
        let array = Object.values(tagsDict).sort();   // obj => array
        return (
            array.map((tag, index) =>
                <TouchableOpacity
                    key={index + 100}
                    onPress={() => this.props.tagClick(tag)}
                    style={styles.drawer_menu_touchable}>
                    <Text style={styles.drawer_menu_text} key={index}>{tag}</Text>
                </TouchableOpacity>
            )
        );
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.drawer_menu_container}>
                    <Text style={[styles.drawer_menu_text, {margin: 5, fontSize: 19}]}>
                        CATEGORIES
                    </Text>
                    { this.renderCategories() }
                </View>
            </ScrollView>
        );
    }
}

DrawerMenu.propTypes = {
    tagClick: PropTypes.func,
}

export default DrawerMenu;
