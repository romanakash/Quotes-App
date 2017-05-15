import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Share } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import Author from './author';
import changeSaved from '../../../realm/updates/changeSaved';

class Quote extends Component {
    state = {
        press: new Date().getTime(),
        saved: false
    }
    componentDidMount() {
        this.setState({ saved: this.props.saved })
    }
    componentWillReceiveProps() {
        this.setState({ saved: this.props.saved })
    }
    _checkDoubleTap = () => {
        delta = new Date().getTime() - this.state.press;
        if (delta < 300) {                                  // check for double tap
            this.animation();
            this.saveQuote();
        }
        this.setState({                         // change time - double tap
            press: new Date().getTime()
        })
    }
    animation = () => {
        if (this.state.saved) {
            this._heart.fadeOut(500);
        }
        else {
            this._heart.pulse(1000);
        }
    }
    saveQuote() {                               // changes save => true ? false
        let objId = this.props.id;              // gets id
        let save = !this.state.saved;           // gets opposite state
        changeSaved(objId, save);               // changes realm
        this.setState({ saved: save })          // change local state
    }
    _share = () => {
        Share.share({
            title: "Quotes Daily",
            message: `${this.props.value} - ${this.props.authorName}
            \n For more quotes download Quotes Daily from the play store
            `
        })
    }
    renderHeart() {
        return (
            <Animatable.View ref={ref => this._heart = ref}
                style={[styles.heart_container, { opacity: ~~this.state.saved }]}
                easing="ease-out-expo"
            >
                <Icon.Button
                    name={"md-heart"}
                    color="white"
                    size={50}
                    backgroundColor="transparent"
                />
            </Animatable.View>
        );
    }
    renderQuote() {;
        return (
            <TouchableWithoutFeedback
                onPress={this._checkDoubleTap}
                onLongPress={this._share}
            >
                <View style={styles.quote_container}>
                    <Text style={[styles.quote_text, { fontFamily: this.props.font }]}>
                        {this.props.value}
                    </Text>
                    <Author name={this.props.authorName} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                { this.renderHeart() }
                { this.renderQuote() }
            </View>
        );
    }
}

Quote.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    authorName: PropTypes.string,
    saved: PropTypes.bool,
    font: PropTypes.string
}

export default Quote;
