import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import quotesRealm from '../../realm/quotesRealm';

class Linear extends Component {
    constructor() {
        super();
        this.state = { colors: [] }
        this.settings = quotesRealm.objects('Settings').filtered('id = 1');
        this.settings.addListener(() => {
            this.setColor();
        });
    }
    setColor() {
        let data = this.settings;
        this.setState({
            colors: [data[0].gradients.color_one, data[0].gradients.color_two]
        });
    }
    componentWillMount() {
        this.setColor();
    }
    componentWillUnmount() {
        this.settings.removeAllListeners();
    }
    render() {
        return (
            <LinearGradient
                colors={this.state.colors}
                style={{flex: 1, paddingTop: StatusBar.currentHeight}}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                {this.props.children}
            </LinearGradient>
        );
    }
}

Linear.propTypes = {
    children: PropTypes.any
}

export default Linear;
