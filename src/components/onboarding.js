import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import quotesRealm from '../realm/quotesRealm';

class OnboardingScreen extends Component {
    state = {
        ready: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ ready: true })
        }, 5000)
    }
    render() {
        let quotes = quotesRealm.objects('Quote');
        return (
            <LinearGradient
                colors={['#ee0979', '#ff6a00']}
                style={{flex: 1}}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontFamily: 'Code-Bold', fontSize: 75}}>
                        Quotes
                    </Text>
                    <TouchableOpacity onPress={this.props.changeState} disabled={!this.state.ready}>
                        <View style={[styles.change_theme_button, {
                            marginTop: 25,
                            height: 35,
                            width: 80
                        }]}>
                            {  this.state.ready ?
                            <Text style={styles.change_theme_text}>ENTER</Text>
                            :
                            <ActivityIndicator
                                color="white"
                            />
                            }
                        </View>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 25}}>
                        Make sure you're connected to the internet
                    </Text>
                </View>
            </LinearGradient>
        );
    }
}

OnboardingScreen.propTypes = {
    changeState: PropTypes.func
}

export default OnboardingScreen;
