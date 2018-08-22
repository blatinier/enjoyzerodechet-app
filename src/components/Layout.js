import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
});

const Layout = ({ children }) => (
    <Container style={styles.container}>
        {children}
    </Container>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Layout;
