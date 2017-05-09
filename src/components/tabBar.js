import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class TabBar extends Component {
    getStyles(button) {
        let { state } = this.props.navigation;
        let route = state.routeName;
        if (button === route) {
            return 1
        }
        else {
            return 0.6
        }
    }
    render() {
        let { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Daily')}
                    style={[styles.button, { opacity: this.getStyles('Daily') }]}
                >
                    <MaterialIcon size={28}
                        color="white"
                        name="update"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Quotes')}
                    style={[styles.button, { opacity: this.getStyles('Quotes') }]}
                >
                    <Ionicon size={28}
                        color="white"
                        name="md-quote"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Saved')}
                    style={[styles.button, { opacity: this.getStyles('Saved') }]}
                >
                    <Ionicon size={28}
                        color="white"
                        name="md-heart"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Settings')}
                    style={[styles.button, { opacity: this.getStyles('Settings') }]}
                >
                    <Ionicon size={28}
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
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 53,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 53,
        width: 100,
    }
}

TabBar.propTypes = {
    navigation: PropTypes.object
}

export default TabBar;
