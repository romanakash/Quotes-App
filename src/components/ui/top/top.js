import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import { Grid, Col } from 'react-native-easy-grid';


import MenuButton from './menu';
import RefreshButton from './refresh';

class Top extends Component {
    state = {
        txt: ''
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.tag !== this.props.tag) {
            this.setState({ txt: this.props.tag.toUpperCase() })
        }
    }
    render() {
        return (
            <Grid>
                <Col size={25}>
                    <MenuButton menuClick={this.props.menuClick}/>
                </Col>
                <Col size={50} style={styles.top_container}>
                    <Text style={styles.top_text}>{this.state.txt}</Text>
                </Col>
                <Col size={25}>
                    <RefreshButton refreshClick={this.props.refreshClick}/>
                </Col>
            </Grid>
        );
    }
}

Top.propTypes = {
    tag: PropTypes.string,
    menuClick: PropTypes.func,
    refreshClick: PropTypes.func
}

export default Top;
