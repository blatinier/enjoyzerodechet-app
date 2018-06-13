import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Logo from '../components/Logo';
import { containerStyle } from '../theme/containerStyle';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    container: {
        ...containerStyle,
        backgroundColor: colors.green,
    },
});

const LoadingScreen = () => (
    <Container style={styles.container}>
        <Logo />
    </Container>
);

export default LoadingScreen;
