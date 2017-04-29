import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
                style={{flex: 1}}
                start={{ x: 0.25, y: 0.25 }}
                end={{ x: 1, y: 1 }}
            >
                <StatusBar
                    backgroundColor={this.state.colors[0]}
                />
                {this.props.children}
            </LinearGradient>
        );
    }
};

export default Linear;
