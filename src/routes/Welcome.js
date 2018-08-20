import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Container, Text } from 'native-base';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import { containerStyle } from '../theme/containerStyle';
import colors from '../theme/colors';
import { readWelcomeMsg } from '../actions';

const styles = StyleSheet.create({
    container: {
        ...containerStyle,
        backgroundColor: colors.green,
    },
    welcomeNotice: {
        width: 250,
        textAlign: 'center',
    },
    welcomeButton: {
        height: 40,
        width: 250,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const WelcomeScreen = ({ navigation: { push } }) => (
    <Container style={styles.container}>
        <Logo />
        <Text style={styles.welcomeNotice}>
            Enjoy Zero Déchet vous aide à cheminer vers un mode de vie zéro déchet.
            On vous propose plein de petits gestes pour y arriver à votre rythme.
        </Text>
        <View style={styles.welcomeButton}>
            <Button
                block
                rounded
                bordered
                light
                onPress={() => {
                    readWelcomeMsg();
                    push('CardsList');
                }}
            >
                <Text>On y va ?</Text>
            </Button>
        </View>
    </Container>
);

WelcomeScreen.propTypes = {
    navigation: PropTypes.shape({
        push: PropTypes.func,
    }),
};

export default withNavigation(WelcomeScreen);
