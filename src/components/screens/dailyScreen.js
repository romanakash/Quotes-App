import React, { Component } from 'react';
import { Text, View, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
import { styles } from 'react-native-theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import Linear from '../ui/linearGradient';
import TabBar from '../tabBar';
import getDaily from '../../data/getDaily';
import getColor from '../../components/themes/getColor';
import getFont from '../themes/getFont';

class DailyScreen extends Component {
    state = {
        data: [],
        daily: null,
        date: new Date(),
        font: '',
        picker: false
    }
    _showPicker = () => this.setState({ picker: true });
    _hidePicker = () => this.setState({ picker: false });

    componentWillMount() {
        let ds = getDaily();            // gets the daily [30]
        this.setState({ data: ds })
        let font = getFont();           // gets quoteFamily
        this.setState({ font: font })
    }
    componentDidMount() {
        if (this.state.data !== undefined && this.state.data.length > 0) {
            this.changeDaily(this.state.date);
        }
    }
    // Changes the daily quote according to this.state.date
    changeDaily() {
        let { data, date } = this.state;
        const formatDate = moment(date).format('DD-MM-YY');
        for (obj of data) {
            if (obj.creationDate === formatDate) {
                this.setState({
                    daily: {
                        day: obj.day,
                        value: obj.value,
                        author: obj.author
                    }
                })
            }
            else {
                this.setState({ daily: null })
            }
        }
    }
    getMinAndMaxDates(first) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
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
        if (this.state.daily !== null) {
            return (
                <View style={{ flex: 0.5, paddingTop: 65 }}>
                    <Text style={[styles.quote_text, { fontFamily: this.state.font }]}>
                        { this.state.daily.value }
                    </Text>
                    <Text style={[styles.author_text, { paddingTop: 25 }]}>
                        { this.state.daily.author }
                    </Text>
                </View>
            );
        }
        else {
            return (
                <View style={{ flex: 0.5, paddingTop: 65 }}>
                    <Text style={[styles.quote_text, { fontFamily: this.state.font }]}>
                        We don't have a Quote for this day
                    </Text>
                    <Text style={[styles.author_text, { paddingTop: 25 }]}>
                        Sorry
                    </Text>
                </View>
            );
        }
    }
    render() {
        const minDate = this.getMinAndMaxDates(true);
        const maxDate = this.getMinAndMaxDates(false);
        return (
            <Linear>
                <View style={{ flex: 1, marginTop: 25 }}>
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
                <TabBar navigation={this.props.navigation}/>
            </Linear>
        );
    }
}

export default DailyScreen;
