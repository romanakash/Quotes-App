import React, { Component } from 'react';
import { Grid, Row } from 'react-native-easy-grid';
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
        if (tag === undefined) {
            let ds = getData(this.state.tag);
            this.setState({ data: ds })
        }
        else {
            let ds = getData(tag);
            this.setState({ data: ds })
        }
    }
    _tagClick = (newTag) => {
        this.setState({ tag: newTag })
        this.getQuotes(newTag);
        this._quoteSwiper._onRefresh();
        this._drawer.close();
    }
    _refreshChange = () => {
        this.getQuotes(this.state.tag);
        this._quoteSwiper._onRefresh();
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
                    openDrawerOffset={0.4}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(4-(ratio*3.35))/4 }
                    })}
                    tweenDuration={500}
                    tweenEasing="easeInOutSine"
                >
                    <Grid>
                        <Row size={10}>
                            <Top
                                menuClick={this._drawerChange}
                                refreshClick={this._refreshChange}
                                tag={this.state.tag}
                            />
                        </Row>
                        <Row size={90}>
                            <QuoteSwiper
                                ref={ref => this._quoteSwiper = ref}
                                quotes={this.state.data}
                            />
                        </Row>
                    </Grid>
                </Drawer>
                <TabBar navigation={this.props.navigation}/>
            </Linear>
        );
    }
}

export default QuoteScreen;
