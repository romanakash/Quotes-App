import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import { ViewPager } from 'rn-viewpager';
import PropTypes from 'prop-types';

import getFont from '../../themes/getFont';
import Quote from '../../ui/quote/quote';

class SavedSwiper extends Component {
    renderSaved() {
        let font = getFont();
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
        return (
            <ViewPager style={{flex:1, marginBottom: 45 }}>
                { this.renderSaved() }
            </ViewPager>
        );
    }
}

export default SavedSwiper;
