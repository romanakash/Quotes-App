import React, { Component } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { styles } from 'react-native-theme';
import { ViewPager } from 'rn-viewpager';
import PropTypes from 'prop-types';

import Quote from './quote';
import getFont from '../../themes/getFont';

class QuoteSwiper extends Component {
    state = {
        font: ''
    }
    componentDidMount() {
        let font = getFont();
        this.setState({ font: font })
    }
    _onRefresh = () => {                                  // refresh
        this._swiper.setPage(0)
    }
    renderQuotes() {
        if (this.props.quotes !== null) {
            return (
                this.props.quotes.map((obj, index) =>
                    <View style={{flex: 1}} key={index+100}>
                        <Quote ref={ref => this._quote = ref}
                            key={index}
                            id={obj.id}
                            value={obj.value}
                            authorName={obj.author}
                            saved={obj.saved}
                            font={this.state.font}
                        />
                    </View>
                )
            );
        }
        else {
            return (
                <View style={styles.quote_container}>
                    <Text style={[styles.quote_text, { fontFamily: this.state.font }]}>
                        Error 404
                    </Text>
                    <Text style={styles.author_text}>
                        {'\n'}Try Reopening the App
                    </Text>
                </View>
            );
        }
    }
    render() {
        return (
            <ViewPager style={{flex:1}} scrollEnabled={true}
                ref={ref => this._swiper = ref}
                removeClippedSubviews={true}
            >
                { this.renderQuotes() }
            </ViewPager>
        );
    }
}

QuoteSwiper.propTypes = {
    quotes: PropTypes.array,
}

export default QuoteSwiper;
