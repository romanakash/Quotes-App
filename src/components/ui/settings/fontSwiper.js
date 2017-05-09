import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import LinearGradient from '../../ui/linearGradient';
import getColor from '../../themes/getColor';
import fonts from '../../themes/fonts';

class FontSwiper extends Component {
    renderFonts() {
        let colors = getColor();
        return (
            fonts.map((font, index) =>
                <View style={{flex: 1}} key={index}>
                    <Font key={index}
                        font={font}
                        colors={colors}
                        onPress={() => this.props.onClose(font)}
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
                { this.renderFonts() }
            </IndicatorViewPager>
        );
    }
}

const Font = ({ colors, font, onPress }) => (
    <LinearGradient
        colors={colors}
        style={{flex: 1}}
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 1, y: 1 }}
    >
        <View style={styles.change_theme_container}>
            <Text style={[styles.quote_text, { fontFamily: font }]}>
                The quick brown fox jumps over the lazy dog
            </Text>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.change_theme_button}>
                    <Text style={styles.change_theme_text}>
                        SET FONT
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </LinearGradient>
);

export default FontSwiper;
