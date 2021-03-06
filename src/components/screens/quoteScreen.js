import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import PropTypes from 'prop-types';

import QuoteSwiper from '../ui/quote/quoteSwiper';
import Top from '../ui/top/top.js';
import DrawerMenu from '../ui/drawer/drawerMenu';
import Linear from '../ui/linearGradient';
import TabBar from '../tabBar';

import getData from '../../data/getData';
import getQuotesByAuthor from '../../data/getQuotesByAuthor';
import tags from '../../data/tags';
import getColor from '../themes/getColor';
import getFont from '../themes/getFont';
AdMobInterstitial.setAdUnitID('ca-app-pub-3634594191727950/1733997818');
class QuoteScreen extends Component {
    state = {
        data: [],
        tag: '',
        drawer: false
    };
    componentDidMount() {
        this.setState({ tag: 'All' })
        this.getQuotes('All');
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd())
        AdMobInterstitial.addEventListener('adClosed', () => {
            setTimeout(() => {
                AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd())
            }, 30000)
        })
    }
    getQuotes = (tag) => {
        if (tag === undefined) {                    // for refresh
            if (tags.includes(this.state.tag)) {    // check for tag
                let ds = getData(this.state.tag);   // as it could be author
                this.setState({ data: ds })
            }
        }
        else {                                  // for tagclick
            let ds = getData(tag);
            this.setState({ data: ds })
        }
    }
    getOnAuthorSelect = (author) => {
        let ds = getQuotesByAuthor(author);
        this.setState({ data: ds })
        this.setState({ tag: author })
        this._quoteSwiper._onRefresh(true);
    }
    _tagClick = (newTag) => {
        this.setState({ tag: newTag })
        this.getQuotes(newTag);
        this._quoteSwiper._onRefresh(true);
        this._drawer.close();
    }
    _drawerChange = () => {
        this.setState({ drawer: !this.state.drawer })
        this.state.drawer ? this._drawer.close() : this._drawer.open();
    }
    render() {
        let colors = getColor();
        return (
            <Linear>
                <Drawer ref={ref => this._drawer = ref}
                    content={<DrawerMenu tagClick={this._tagClick} />}
                    type="overlay"
                    tapToClose={true}
                    openDrawerOffset={(viewport) => viewport.width - 250}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(4-(ratio*3.8))/4 }
                    })}
                    tweenDuration={500}
                    tweenEasing="easeInOutSine"
                >
                    <View style={{flex: 1}}>
                        <View style={{flex: 0.1}}>
                            <Top getOnAuthorSelect={this.getOnAuthorSelect}
                                menuClick={this._drawerChange}
                                tag={this.state.tag}
                                colors={colors}
                            />
                        </View>
                        <View style={{flex: 0.8}}>
                            <QuoteSwiper
                                ref={ref => this._quoteSwiper = ref}
                                quotes={this.state.data}
                                getQuotes={this.getQuotes}
                                colors={colors}
                                font={getFont()}
                            />
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <AdMobBanner
                                adSize="banner"
                                adUnitID="ca-app-pub-3634594191727950/8623089816"
                            />
                        </View>
                        <View style={{flex: 0.1}}>
                            <TabBar navigation={this.props.navigation}/>
                        </View>
                    </View>
                </Drawer>
            </Linear>
        );
    }
}

QuoteScreen.propTypes = {
    navigation: PropTypes.object
}

export default QuoteScreen;
