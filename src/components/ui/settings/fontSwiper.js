import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Swiper from 'react-native-swiper';

import LinearGradient from '../../ui/linearGradient';
import getColor from '../../themes/getColor';
import fonts from '../../themes/fonts';

class FontSwiper extends Component {
    renderFonts() {
        let colors = getColor();
        return (
            fonts.map((font, index) =>
                <Theme key={index}
                    font={font}
                    colors={colors}
                    onPress={() => this.props.onClose(font)}
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
                { this.renderFonts() }
            </Swiper>
        );
    }
}

const Theme = ({ colors, font, onPress }) => (
    <LinearGradient
        colors={colors}
        style={{flex: 1}}
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 1, y: 1 }}
    >
        <View style={[styles.change_theme_container, { paddingTop: 100 }]}>
            <Text style={[styles.quote_text, { fontFamily: font }]}>
                {font}
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
