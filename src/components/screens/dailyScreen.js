import React, { Component } from 'react';
import { Text, View, DatePickerAndroid, TouchableWithoutFeedback, ScrollView, RefreshControl, NetInfo } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { AdMobBanner } from 'react-native-admob';
import PropTypes from 'prop-types';

import Linear from '../ui/linearGradient';
import TabBar from '../tabBar';
import getDailyQuotes from '../../api/getDailyQuotes';
import getColor from '../../components/themes/getColor';
import getFont from '../themes/getFont';

class DailyScreen extends Component {
    state = {
        daily: null,
        date: new Date(),
        picker: false,
        spinner: false
    }
    _showPicker = () => this.setState({ picker: true });
    _hidePicker = () => this.setState({ picker: false });

    componentWillMount() {
        this.changeDaily();
    }
    // Changes the daily quote according to this.state.date
    changeDaily() {
        NetInfo.getConnectionInfo().then((net) => {
            if (net.type !== "none" && net.type !== "unknown") {
                this.setState({ spinner: true })
                let { date } = this.state;
                let todayDate = parseInt(moment(date).format("DD"), 10);
                let todayMonth = parseInt(moment(date).format("MM"), 10);
                let promise = getDailyQuotes(todayMonth, todayDate);
                promise.then((daily) => {
                    this.setState({ spinner: false })
                    return this.setState({
                        daily: {
                            day: daily.day,
                            value: daily.value,
                            author: daily.author
                        }
                    })
                }).catch(() => {
                    this.setState({ daily: null })
                    this.setState({ spinner: false })
                })
            }
            else {
                this.setState({ daily: null })
            }
        })
    }
    getMinAndMaxDates(first) {
        var date = this.state.date, y = date.getFullYear(), m = date.getMonth();
        if (first) {
            var firstDay = new Date(y, m, 1);
            return firstDay
        }
        else {
            var lastDay = new Date(y, m + 1, 0);
            return lastDay
        }
    }
    // Handles the date from DateTimePicker
    _handleDate = (date) => {
        this.setState({ date: date })
        this.changeDaily();
        this._hidePicker();
    }
    // Renders the title
    renderDay() {
        if (this.state.daily !== null) {
            return (
                <View style={{ flex: 0.05, marginBottom: 5 }}>
                    <Text style={styles.daily_day}>
                        {this.state.daily.day.toUpperCase()}
                    </Text>
                </View>
            );
        }
        else {
            let { date } = this.state;
            date = moment(date).format('dddd');
            return (
                <View style={{ flex: 0.05, marginBottom: 5 }}>
                    <Text style={styles.daily_day}>
                        {date}
                    </Text>
                </View>
            );
        }
    }
    // Renders the Date
    renderDate() {
        let colors = getColor();
        return (
            <TouchableWithoutFeedback onPress={this._showPicker}>
                <View style={styles.date_container}>
                    <Text style={{ color: colors[0], fontFamily: 'HelveticaNeue-Thin', fontSize: 18 }}>
                        { moment(this.state.date).format('D / M / YY') }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
    // Renders the Quote
    renderDaily() {
        let font = getFont();
        let colors = getColor();
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{flex: 1}}
                    contentContainerStyle={{ flex: 1}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.spinner}
                            onRefresh={() => {
                                this.setState({ spinner: true })
                                this.changeDaily()
                                setTimeout(() => this.setState({ spinner: false }), 1000)
                            }}
                            colors={colors}
                            progressBackgroundColor="white"
                            tintColor="transparent"
                            progressViewOffset={1}
                        />}
                >
                    { this.state.daily !== null ?
                        <View style={{paddingTop: 65}}>
                            <Text style={[styles.quote_text, { fontFamily: font }]}>
                                { this.state.daily.value }
                            </Text>
                            <Text style={[styles.author_text, { paddingTop: 25 }]}>
                                { this.state.daily.author }
                            </Text>
                        </View>:
                        <View style={{paddingTop: 65}}>
                            <Text style={[styles.quote_text, { fontFamily: font }]}>
                                We do not have a Quote for this day
                            </Text>
                            <Text style={[styles.author_text, { paddingTop: 25 }]}>
                                Sorry, Maybe its your internet connection
                            </Text>
                        </View>
                    }
                </ScrollView>
            </View>
        );
    }
    render() {
        const minDate = this.getMinAndMaxDates(true);
        const maxDate = this.getMinAndMaxDates(false);
        return (
            <Linear>
                <View style={{ flex: 0.9, marginTop: 25 }}>
                    { this.renderDay() }
                    { this.renderDate() }
                    { this.renderDaily() }
                </View>
                <DateTimePicker
                    date={this.state.date}
                    isVisible={this.state.picker}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onConfirm={this._handleDate}
                    onCancel={this._hidePicker}
                />
                <View style={{alignSelf:'center'}}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID="ca-app-pub-3634594191727950/8623089816"
                    />
                </View>
                <View style={{ flex: 0.1, marginTop: 25 }}>
                    <TabBar navigation={this.props.navigation}/>
                </View>
            </Linear>
        );
    }
}

DailyScreen.propTypes = {
    navigation: PropTypes.object
}

export default DailyScreen;
