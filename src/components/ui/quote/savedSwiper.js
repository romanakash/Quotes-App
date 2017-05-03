import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import { ViewPager } from 'rn-viewpager';
import PropTypes from 'prop-types';

import getFont from '../../themes/getFont';
import Quote from '../../ui/quote/quote';

class SavedSwiper extends Component {
    state = {
        font: ''
    }
    componentDidMount() {
        let font = getFont();
        this.setState({ font: font })
    }
    renderSaved() {
        return (
            this.props.savedQuotes.map((obj, index) =>
                <View style={{flex:1}} key={index+100}>
                    {<Quote ref={ref => this._quote = ref}
                        key={index}
                        id={obj.id}
                        value={obj.value}
                        authorName={obj.author}
                        saved={obj.saved}
                        font={this.state.font}
                    />}
                </View>
            )
        );
    }
    render() {
        return (
            <ViewPager style={{flex:1}}>
                { this.renderSaved() }
            </ViewPager>
        );
    }
}

export default SavedSwiper;
