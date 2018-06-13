import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Icon, Left, Text, Body, Right, List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import { flowRight } from 'lodash/fp';
import { connect } from 'react-redux';
import withTranslation from '../i18n';
import colors from '../theme/colors';
import Layout from '../components/Layout';
import { logout } from '../actions';

const styles = StyleSheet.create({
    divider: {
        backgroundColor: colors.warmGray,
    },
});

const handleLogout = (dispatchLogout, navigation) => async () => {
    await dispatchLogout();
    navigation.navigate('Home');
};

const SettingsInner = ({ t, navigation, dispatchLogout }) => (
    <Layout title={t('settings')} returnButton>
        <Content >
            <List>
                <ListItem itemDivider style={styles.divider} />
                <ListItem
                    icon
                    onPress={handleLogout(dispatchLogout, navigation)}
                >

                    <Left>
                        <Icon name="exit" />
                    </Left>
                    <Body>
                        <Text>{t('logout')}</Text>
                    </Body>
                    <Right />
                </ListItem>
                <ListItem itemDivider style={styles.divider} />
            </List>
        </Content>
    </Layout>
);

SettingsInner.propTypes = {
    t: PropTypes.func,
    dispatchLogout: PropTypes.func,
    navigation: PropTypes.shape({
        pop: PropTypes.func,
    }),
};

const mapDispatchToProps = { dispatchLogout: logout };

const Settings = flowRight(
    withTranslation,
    connect(null, mapDispatchToProps),
)(SettingsInner);

export default Settings;
