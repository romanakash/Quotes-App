import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class TabBar extends Component {
    state = {
        screen: null
    }
    componentWillMount() {
        let { state } = this.props.navigation;
        let route = state.routeName;
        this.setState({ screen: route })
    }
    getStyles(button) {
        let opacity = button === this.state.screen ? 1 : 0.6
        return opacity;
    }
    _handleClick = (name) => {
        let { navigate } = this.props.navigation;
        this.state.screen === name ? null : navigate(name)
    }
    render() {
        let iconSize = 31;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._handleClick('Daily')}
                    style={[styles.button, { opacity: this.getStyles('Daily') }]}
                >
                    <MaterialIcon size={iconSize}
                        color="white"
                        name="update"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleClick('Quotes')}
                    style={[styles.button, { opacity: this.getStyles('Quotes') }]}
                >
                    <Ionicon size={iconSize}
                        color="white"
                        name="md-quote"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleClick('Saved')}
                    style={[styles.button, { opacity: this.getStyles('Saved') }]}
                >
                    <Ionicon size={iconSize}
                        color="white"
                        name="md-heart"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleClick('Settings')}
                    style={[styles.button, { opacity: this.getStyles('Settings') }]}
                >
                    <Ionicon size={iconSize}
                        color="white"
                        name="ios-menu"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0.03)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    }
}

TabBar.propTypes = {
    navigation: PropTypes.object
}

export default TabBar;
