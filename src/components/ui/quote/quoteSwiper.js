import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import Quote from './quote';
import getFont from '../../themes/getFont';

class QuoteSwiper extends Component {
    state = {
        arrow: true,
        index: 0,
        font: ''
    }
    componentDidMount() {
        let font = getFont();
        this.setState({ font: font })
    }
    _handleArrow = () => {                                // fade arrow
        this.setState({ arrow: !this.state.arrow });
    }
    _onRefresh = () => {                                  // refresh
        this._swiper.scrollBy(-this.state.index)
    }
    _onMomentumScrollEnd = (e, state, context) => {       // update index
        this.setState({ index: state.index })
    }
    renderQuotes() {
        if (this.props.quotes !== null) {
            return (
                this.props.quotes.map((obj, index) =>
                    <Quote ref={ref => this._quote = ref}
                        key={index}
                        id={obj.id}
                        value={obj.value}
                        authorName={obj.author}
                        saved={obj.saved}
                        font={this.state.font}
                    />
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
            <Swiper
                ref={swiper => this._swiper = swiper}
                loop={false}
                index={0}
                showsPagination={false}
                showsButtons={this.state.arrow}
                onTouchEnd={this._handleArrow}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
                buttonWrapperStyle={{ paddingBottom: 240 }}
                prevButton={<Text style={styles.swiper_button_styles}>{"\u1438"}</Text>}
                nextButton={<Text style={styles.swiper_button_styles}>{"\u1433"}</Text>}
                loadMinimal={true}
                loadMinimalSize={10}
                removeClippedSubviews={true}
            >
                { this.renderQuotes() }
            </Swiper>
        );
    }
}

QuoteSwiper.propTypes = {
    quotes: PropTypes.array,
}

export default QuoteSwiper;
