import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import gradients from './themes/gradients';

class Onboarding extends Component {
    _renderDotIndicator() {
       return (
           <PagerDotIndicator pageCount={5}
               dotStyle={styles.dot}
               selectedDotStyle={[styles.dot, { backgroundColor: 'white' }]}
           />
       );
   }
    render() {
        return (
            <IndicatorViewPager style={{flex: 1}}
                indicator={this._renderDotIndicator()}
            >
                <View>
                    <LinearGradient
                        colors={gradients[0].colors}
                        style={{flex: 1}}
                        start={{ x: 0.25, y: 0.25 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text>Hello 1</Text>
                    </LinearGradient>
                </View>
                <View>
                    <LinearGradient
                        colors={gradients[1].colors}
                        style={{flex: 1}}
                        start={{ x: 0.25, y: 0.25 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text>Hello 1</Text>
                        <TouchableOpacity style={styles.done}
                            onPress={() => this.props.changeState()}
                        >
                            <Text style={styles.done_text}>
                                DONE
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </IndicatorViewPager>
        );
    }
}

Onboarding.propTypes = {
    changeState: PropTypes.func
}

const styles = {
    dot: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginBottom: 40,
        marginLeft: 15,
        height: 6,
        width: 6,
        borderRadius: 25
    },
    done: {
        margin: 5,
        marginTop: 480,
        marginLeft: 265,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 80,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    done_text: {
        flex: 1,
        color: 'white',
        fontFamily: 'Futura',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
}

export default Onboarding;
