import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { debounce } from 'lodash/function';
import Fuse from 'fuse.js';
import * as Animatable from 'react-native-animatable';
import Reactotron from 'reactotron-react-native';
import getSearchData from '../../../data/getSearchData';
import getColor from '../../themes/getColor';

const INITIAL_TOP = -60;
const ANIMATION_DURATION = 300;
const color = getColor()[0]
const data = getSearchData();

class SearchAuthor extends Component {
    state = {
        input: '',
        show: false,
        top: new Animated.Value(INITIAL_TOP),
        authors: [],
        recent: []
    }
    show = () => {
        this.setState({ show: true })
        this.setState({ input: '' })
        Animated.timing(
            this.state.top, {
                toValue: 0,
                duration: ANIMATION_DURATION,
                easing: Easing.inOut(Easing.quad)
            }
        ).start();
    }
    hide = () => {
        this._box.fadeOutUp();
        Animated.timing(
            this.state.top, {
                toValue: INITIAL_TOP,
                duration: ANIMATION_DURATION,
                easing: Easing.inOut(Easing.quad)
            }
        ).start();
        setTimeout(() => {
            this.setState({ show: false })
        }, ANIMATION_DURATION);
    }
    _clearInput = () => {
        this.setState({ input: '' })
        this._onChangeText('');
    }
    _onChangeText = (input) => {
        this.setState({ input })
        debounce(() => {
            const results = this._internalSearch(input);
            this.setState({ authors: results })
        }, 500)();
    }
    _internalSearch = (input) => {
        const options = {
            id: "name",
            shouldSort: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            keys: ["name"],
            maxPatternLength: 32,
            minMatchCharLength: 2,
        }
        const fuse = new Fuse(data, options);
        const array = fuse.search(input);
        if (array.length > 5) {
            results = array.slice(1, 6)
            return results
        }
        return array
    }
    _authorSelect = (author) => {
        this.setState({ recent: [...this.state.recent, author] })
        this.props.getOnAuthorSelect(author);
        this.hide();
    }
    renderArrow() {
        return (
            <TouchableOpacity
                accessible={true}
                accessibilityComponentType="button"
                onPress={this.hide}
            >
                <Icon
                   name='arrow-back'
                   size={28}
                   style={styles.arrow}
                />
            </TouchableOpacity>
        );
    }
    renderInput() {
        return (
            <TextInput
                ref={(ref) => this.textInput = ref}
                onLayout={() => this.textInput.focus()}
                style={styles.input}
                onChangeText={(input) => this._onChangeText(input)}
                onSubmitEditing={null}
                onFocus={null}
                placeholder={"Search by Author Name"}
                placeholderTextColor={"lightgray"}
                value={this.state.input}
                underlineColorAndroid='transparent'
                returnKeyType='search'
                autoCorrect={true}
                autoCapitalize={"words"}
            />
        );
    }
    renderX() {
        return (
            <TouchableOpacity
                accessible={true}
                accessibilityComponentType='button'
                onPress={this.state.input === '' ? null : this._clearInput}
            >
                <Icon
                    name={'close'}
                    size={28}
                    style={{
                        color: this.state.input == '' ? "white" : color
                    }}
                />
            </TouchableOpacity>
        );
    }
    renderBox() {
        let { input, recent, authors } = this.state;
        let array = input === "" ? recent : authors
        Reactotron.log(data)
        return (
            <Animatable.View ref={ref => this._box = ref}
                style={styles.box}
                animation="fadeInDown" duration={500}
            >
                {array.map((author, index) => {
                    return (
                        <TouchableOpacity onPress={() => this._authorSelect(author)}
                            key={index} style={styles.touchable}
                        >
                            <Text style={styles.text}>
                                {author}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </Animatable.View>
        );
    }
    render() {
        return (
            <Animated.View style={[styles.container, {
                top: this.state.top,
                shadowOpacity: 0.7
            }]}>
            {
            this.state.show &&
                <View>
                    <View style={styles.navWrapper}>
                        <View style={styles.nav}>
                            { this.renderArrow() }
                            { this.renderInput() }
                            { this.renderX() }
                        </View>
                    </View>
                    <View style={{backgroundColor: 'transparent', height: 5}} />
                    { this.renderBox() }
                </View>
            }
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        zIndex: 10,
        position: 'absolute',
        elevation: 2,
        shadowRadius: 5,
    },
    navWrapper: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
    },
    nav: {
        flex: 1,
        flexBasis: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 52
    },
    arrow: {
        color: color,
        padding: 10
    },
    input: {
        height: 60,
        fontSize: 20,
        color: color,
        fontFamily: 'Quicksand-Regular',
        width: Dimensions.get('window').width - 120,
    },
    box: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 5,
        marginLeft: 5,
    },
    touchable: {
        backgroundColor: 'transparent',
        marginLeft: 25,
        marginRight: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        padding: 8,
    },
    text: {
        color: color,
        fontSize: 18,
        fontFamily: 'Helvectica-Nueue',
        textAlignVertical: 'center'
    }
}

export default SearchAuthor
