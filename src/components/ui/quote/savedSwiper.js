import React, { Component } from 'react';
import { Text, View, ViewPagerAndroid } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';

import Quote from '../../ui/quote/quote';
import getFont from '../../themes/getFont';

class SavedSwiper extends Component {
    renderSaved(font) {
        return (
            this.props.savedQuotes.map((obj, index) => // eslint-disable-line
                <View style={{flex:1}} key={index}>
                    <Quote ref={ref => this._quote = ref}
                        key={index}
                        id={obj.id}
                        value={obj.value}
                        authorName={obj.author}
                        saved={obj.saved}
                        font={font}
                    />
                </View>
            )
        );
    }
    render() {
        let font = getFont();
        return (
            <ViewPagerAndroid style={{flex:1}}>
                { this.renderSaved(font) }
            </ViewPagerAndroid>
        );
    }
}

SavedSwiper.PropTypes = {
    savedQuotes: PropTypes.object,
}

export default SavedSwiper;
