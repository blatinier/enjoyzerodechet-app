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
        backgroundColor: colors.primary,
    },
    welcomeTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
    },
    welcomeNotice: {
        width: 280,
        textAlign: 'center',
    },
    welcomeButtonView: {
        height: 40,
        width: 250,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeButton: {
        borderColor: colors.darkGray,
    },
    buttonText: {
        color: colors.darkGray,
    },
});

const WelcomeScreen = ({ navigation: { push } }) => (
    <Container style={styles.container}>
        <Logo />
        <Text style={styles.welcomeTitle}>
            ENJOY ZÉRO DÉCHET
        </Text>
        <Text style={styles.welcomeNotice}>
            Une application ludique pour cheminer avec plaisir vers le zéro déchet !
        </Text>
        <View style={styles.welcomeButtonView}>
            <Button
                block
                rounded
                bordered
                light
                style={styles.welcomeButton}
                onPress={() => {
                    readWelcomeMsg();
                    push('CardsList');
                }}
            >
                <Text style={styles.buttonText}>On y va ?</Text>
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
