import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import { ViewPager } from 'rn-viewpager';
import PropTypes from 'prop-types';

import Quote from '../../ui/quote/quote';
import getFont from '../../themes/getFont';

class SavedSwiper extends Component {
    renderSaved(font) {
        return (
            this.props.savedQuotes.map((obj, index) =>
                <View style={{flex:1}} key={index}>
                    {<Quote ref={ref => this._quote = ref}
                        key={index}
                        id={obj.id}
                        value={obj.value}
                        authorName={obj.author}
                        saved={obj.saved}
                        font={font}
                    />}
                </View>
            )
        );
    }
    render() {
        let font = getFont();
        return (
            <ViewPager style={{flex:1}}>
                { this.renderSaved(font) }
            </ViewPager>
        );
    }
}

SavedSwiper.PropTypes = {
    savedQuotes: PropTypes.obj,
}

export default SavedSwiper;
