import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Header from './Header';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
});

const Layout = ({ children, ...headerOptions }) => (
    <Container style={styles.container}>
        <Header {...headerOptions} />
        {children}
    </Container>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    headerOptions: PropTypes.shape({}),
};

export default Layout;
