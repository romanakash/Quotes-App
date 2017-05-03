import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import gradients from '../../themes/gradients';

class ThemeSwiper extends Component {
    renderThemes() {
        return (
            gradients.map((gradient, index) =>
                <View style={{flex:1}} key={index}>
                    <Theme key={index}
                        name={gradient.name}
                        colors={gradient.colors}
                        onPress={() => this.props.onClose(gradient.name)}
                    />
                </View>
            )
        );
    }
    _renderDotIndicator() {
       return (
           <PagerDotIndicator pageCount={14}
               dotStyle={styles.settings_pagination}
               selectedDotStyle={[styles.settings_pagination, {
                   backgroundColor: 'white'
               }]}
           />
       );
   }
    render() {
        return (
            <IndicatorViewPager style={{flex: 1}}
                indicator={this._renderDotIndicator()}
            >
                { this.renderThemes() }
            </IndicatorViewPager>
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
