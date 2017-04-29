import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from 'react-native-theme';

const Author = ({ name }) => (
    <Text style={styles.author_text}>
        {"\n"}{name}
    </Text>
);

Author.propTypes = {
    name: PropTypes.string
}

export default Author;
