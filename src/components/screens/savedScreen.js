import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from 'react-native-theme';

import Linear from '../ui/linearGradient';
import TabBar from '../tabBar';
import SavedSwiper from '../ui/quote/savedSwiper';
import quotesRealm from '../../realm/quotesRealm';
import getFont from '../themes/getFont';

class SavedScreen extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        let result = quotesRealm.objects('Quote').filtered('saved = true');
        this.setState({ data: result })
    }
    renderSaved() {
        let { data } = this.state;
        if (data !== null && data.length > 0) {
            return (
                <SavedSwiper
                    savedQuotes={this.state.data}
                    isSavedScreen={true}
                />
            );
        }
        else {
            return (
                <View style={styles.quote_container}>
                    <Text style={[styles.quote_text, { fontFamily: getFont() }]}>
                        You have no Saved Quotes
                    </Text>
                    <Text style={styles.author_text}>
                        {'\n'}Double tap a quote to save it
                    </Text>
                </View>
            );
        }
    }
    render() {
        return (
            <Linear>
                <View style={{ flex: 1, marginTop: 15}}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={[styles.top_text, { textAlign: 'center', paddingRight: 10 }]}>
                            SAVED
                        </Text>
                    </View>
                    { this.renderSaved() }
                </View>
                <TabBar navigation={this.props.navigation}/>
            </Linear>
        );
    }
}

export default SavedScreen;
