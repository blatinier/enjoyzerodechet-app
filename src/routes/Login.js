import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Container, Button, Text, Item, Icon, Toast } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { flowRight } from 'lodash/fp';
import colors from '../theme/colors';
import { containerStyle, viewStyle } from '../theme/containerStyle';
import { loadResponseFromLogin } from '../actions';
import withTranslation from '../i18n';
import Input from '../components/Input';
import Logo from '../components/Logo';

const styles = StyleSheet.create({
    container: {
        ...containerStyle,
        backgroundColor: colors.green,
    },
    view: viewStyle,
    input: {
        backgroundColor: colors.transparentWhite,
        width: 300,
        marginTop: 20,
        paddingLeft: 10,
    },
    button: {
        marginTop: 25,
    },
});

const errorMessage = (loginStatus, t) => {
    switch (loginStatus) {
        case 403:
            return t('invalidCredentialsError');
        case 200:
            return '';
        default:
            return t('serverError');
    }
};

const LoginInner = ({ handleSubmit, t }) => (
    <Container style={styles.container}>
        <View style={styles.view}>
            <Logo />
        </View>
        <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" style={styles.view}>
            <Item style={styles.input} rounded>
                <Icon active name="user" type="FontAwesome" />
                <Field
                    name="login"
                    placeholder={t('login')}
                    returnKeyType="next"
                    keyboardType="email-address"
                    // eslint-disable-next-line no-underscore-dangle
                    onSubmitEditing={() => this.passwordInput._root.focus()}
                    placeholderTextColor={colors.darkGray}
                    autoCapitalize="none"
                    component={Input}
                />
            </Item>
            <Item style={styles.input} rounded>
                <Icon active name="lock" type="FontAwesome" />
                <Field
                    name="password"
                    placeholder={t('password')}
                    secureTextEntry
                    refField={(input) => { this.passwordInput = input; }}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="done"
                    placeholderTextColor={colors.darkGray}
                    autoCapitalize="none"
                    component={Input}
                />
            </Item>
            <Button
                block
                rounded
                bordered
                light
                style={styles.button}
                onPress={() => { handleSubmit(); Keyboard.dismiss(); }}
            >
                <Text>{t('connectLogin')}</Text>
            </Button>
        </KeyboardAvoidingView>
    </Container>
);

LoginInner.propTypes = {
    handleSubmit: PropTypes.func,
    t: PropTypes.func,
};

const Login = flowRight(
    withTranslation,
    reduxForm({
        form: 'login',
        onSubmit: (values, dispatch) => dispatch(loadResponseFromLogin(values)),
        onSubmitSuccess: (result, dispatch, { navigation, t }) => {
            if (result) {
                return navigation.push('CardsList');
            }

            return Toast.show({
                text: errorMessage(result, t),
                buttonText: 'Ok',
                buttonTextStyle: { color: colors.white },
                buttonStyle: { backgroundColor: colors.green },
                duration: 15000,
            });
        },
    }),
)(LoginInner);

export default Login;
