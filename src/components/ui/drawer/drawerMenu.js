import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import _ from 'lodash';

import tags from '../../../data/tags'

const tagSorted = _.sortBy(tags);

class DrawerMenu extends Component {
    renderCategories() {
        return (
            tagSorted.map((tag, index) =>
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
