import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, ViewPagerAndroid } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';

import Quote from './quote';

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
                            font={this.props.font}
                        />
                    </View>
                )
            );
        }
        else {
            return (
                <View style={styles.quote_container}>
                    <Text style={[styles.quote_text, { fontFamily: this.props.font }]}>
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
            <ScrollView style={{flex: 1}}
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={this.props.colors}
                        progressBackgroundColor="white"
                        tintColor="transparent"
                        progressViewOffset={1}
                    />}
            >
                <ViewPagerAndroid ref={ref => this._swiper = ref}
                    style={{flex: 1}}
                    keyboardDismissMode="on-drag"
                >
                    { this.renderQuotes() }
                </ViewPagerAndroid>
            </ScrollView>
        );
    }
}

QuoteSwiper.propTypes = {
    quotes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    getQuotes: PropTypes.func,
    colors: PropTypes.array,
    font: PropTypes.string
}

export default QuoteSwiper;
