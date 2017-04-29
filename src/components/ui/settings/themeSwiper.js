import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

import gradients from '../../themes/gradients';

class ThemeSwiper extends Component {
    renderThemes() {
        return (
            gradients.map((gradient, index) =>
                <Theme key={index}
                    name={gradient.name}
                    colors={gradient.colors}
                    onPress={() => this.props.onClose(gradient.name)}
                />
            )
        );
    }
    render() {
        return (
            <Swiper loop={true}
                paginationStyle={{ width: 280 }}
                dot={<View style={styles.settings_pagination} />}
                activeDot={<View style={[styles.settings_pagination,
                                    { backgroundColor: 'white'} ]} />}
            >
                { this.renderThemes() }
            </Swiper>
        );
    }
}

const Theme = ({ colors, name, onPress }) => (
    <LinearGradient
        colors={colors}
        style={{flex: 1}}
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 1, y: 1 }}
    >
        <View style={styles.change_theme_container}>
            <Text style={styles.change_theme_main_text}>
                {name}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.change_theme_button}>
                    <Text style={styles.change_theme_text}>SET THEME</Text>
                </View>
            </TouchableOpacity>
        </View>
    </LinearGradient>
);

ThemeSwiper.propTypes = {
    onClose: PropTypes.func
}

export default ThemeSwiper;
