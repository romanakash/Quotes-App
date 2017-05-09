import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';

import MenuButton from './menu';
import SearchButton from './search';

class Top extends Component {
    state = {
        txt: ''
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.tag !== this.props.tag) {
            this.setState({ txt: this.props.tag.toUpperCase() })
        }
    }
    render() {
        return (
            <View style={styles.top_container}>
                <View style={{flex: 0.20, alignItems: 'center'}}>
                    <MenuButton menuClick={this.props.menuClick}/>
                </View>
                <View style={{flex: 0.60, alignItems: 'center'}}>
                    <Text style={styles.top_text}>{this.state.txt}</Text>
                </View>
                <View style={{flex: 0.20, alignItems: 'center'}}>
                    <SearchButton />
                </View>
            </View>
        );
    }
}

Top.propTypes = {
    tag: PropTypes.string,
    menuClick: PropTypes.func,
    refreshClick: PropTypes.func
}

export default Top;
