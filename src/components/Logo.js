import React from 'react';
import { StyleSheet, Image } from 'react-native';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
    logo: {
        height: 200,
        width: 200,
    },
});

const Logo = () => (
    <Image source={logo} style={styles.logo} />
);

export default Logo;
