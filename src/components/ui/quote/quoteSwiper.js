import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { styles } from 'react-native-theme';
import { ViewPager } from 'rn-viewpager';
import PropTypes from 'prop-types';
import Quote from './quote';
import getFont from '../../themes/getFont';
import getColor from '../../themes/getColor';

class QuoteSwiper extends Component {
    state = {
        refreshing: false,
    }
    _onRefresh = (tagClick) => {
        if (tagClick) {                     // if clicked from tag     
            this._swiper.setPageWithoutAnimation(0);
        }
        else {
            this.setState({ refreshing: true })
            this.props.getQuotes();
            this._swiper.setPage(0);
            setTimeout(() => this.setState({ refreshing: false }), 50)
        }
    }
    renderQuotes() {
        if (this.props.quotes !== null) {
            return (
                this.props.quotes.map((obj, index) =>
                    <View style={{flex: 1}} key={index}>
                        <Quote ref={ref => this._quote = ref}
                            key={index}
                            id={obj.id}
                            value={obj.value}
                            authorName={obj.author}
                            saved={obj.saved}
                        />
                    </View>
                )
            );
        }
        else {
            let font = getFont();
            return (
                <View style={styles.quote_container}>
                    <Text style={[styles.quote_text, { fontFamily: font }]}>
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
        let colors = getColor();
        let { height } = Dimensions.get('window');
        height = height * 0.771;
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            colors={colors}
                            progressBackgroundColor="white"
                            tintColor="transparent"
                            progressViewOffset={1}
                        />}
                >
                    <ViewPager ref={ref => this._swiper = ref}
                        scrollEnabled={true}
                        removeClippedSubviews={true}
                        style={{flex:1, height: height}}
                    >
                        { this.renderQuotes() }
                    </ViewPager>
                </ScrollView>

            </View>
        );
    }
}

QuoteSwiper.propTypes = {
    quotes: PropTypes.array,
}

export default QuoteSwiper;
