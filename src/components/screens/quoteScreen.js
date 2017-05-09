import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Reactotron from 'reactotron-react-native';
import Drawer from 'react-native-drawer';
import QuoteSwiper from '../ui/quote/quoteSwiper';
import Top from '../ui/top/top.js';
import DrawerMenu from '../ui/drawer/drawerMenu';
import getData from '../../data/getData';
import Linear from '../ui/linearGradient';
import TabBar from '../tabBar';

class QuoteScreen extends Component {
    state = {
        data: [],
        tag: '',
        drawer: false
    };
    componentDidMount() {
        this.setState({ tag: 'All' })
        this.getQuotes('All');
    }
    getQuotes = (tag) => {
        if (tag === undefined) {                // for refresh
            let ds = getData(this.state.tag);
            this.setState({ data: ds })
        }
        else {                                  // for tagclick
            let ds = getData(tag);
            this.setState({ data: ds })
        }
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
        return (
            <Linear>
                <Drawer ref={ref => this._drawer = ref}
                    content={<DrawerMenu tagClick={this._tagClick} />}
                    type="overlay"
                    tapToClose={true}
                    openDrawerOffset={(viewport) => viewport.width - 250}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(4-(ratio*3.35))/4 }
                    })}
                    tweenDuration={500}
                    tweenEasing="easeInOutSine"
                >
                    <View style={{flex: 1}}>
                        <View style={{flex: 0.1}}>
                            <Top
                                menuClick={this._drawerChange}
                                tag={this.state.tag}
                            />
                        </View>
                        <View style={{flex: 0.8}}>
                            <QuoteSwiper
                                ref={ref => this._quoteSwiper = ref}
                                quotes={this.state.data}
                                getQuotes={this.getQuotes}
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

export default QuoteScreen;
