import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';

import SearchAuthor from './searchAuthor';
import MenuButton from './menu';
import SearchButton from './search';

class Top extends Component {
    state = {
        txt: ''
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.tag !== this.props.tag) {
            this.setState({ txt: this.props.tag.toUpperCase() })
        }
    }
    searchClick = () => {
        this._searchAuthor.show();
    }
    render() {
        return (
            <View style={styles.top_container}>
                <SearchAuthor ref={ref => this._searchAuthor = ref}
                    color={this.props.colors[0]}
                    getOnAuthorSelect={this.props.getOnAuthorSelect}
                />
                <View style={{flex: 0.20, alignItems: 'center'}}>
                    <MenuButton menuClick={this.props.menuClick}/>
                </View>
                <View style={{flex: 0.60, alignItems: 'center'}}>
                    <Text style={styles.top_text}>{this.state.txt}</Text>
                </View>
                <View style={{flex: 0.20, alignItems: 'center'}}>
                    <SearchButton searchClick={this.searchClick}/>
                </View>
            </View>
        );
    }
}

Top.propTypes = {
    tag: PropTypes.string,
    menuClick: PropTypes.func,
    refreshClick: PropTypes.func,
    getOnAuthorSelect: PropTypes.func,
    colors: PropTypes.array
}

export default Top;
