import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'react-native-theme';
import Swiper from 'react-native-swiper';
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
    render() {
        return (
            <Swiper
                ref={swiper => this._swiper = swiper}
                loop={false}
                showsButtons={true}
                buttonWrapperStyle={{ paddingBottom: 240 }}
                prevButton={<Text style={styles.swiper_button_styles}>{"\u1438"}</Text>}
                nextButton={<Text style={styles.swiper_button_styles}>{"\u1433"}</Text>}
            >
                { this.renderSaved() }
            </Swiper>
        );
    }
}

export default SavedSwiper;
