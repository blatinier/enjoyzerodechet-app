import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Content, Icon, List, ListItem, Right, Text } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import colors from '../theme/colors';
import withTranslation from '../i18n';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
    divider: {
        backgroundColor: colors.warmGray,
    },
});

const CardsList = ({ t }) => (
    <Layout title={t('cards')} settingsButton>
        <Content style={styles.container}>
            <List>
                <ListItem itemDivider style={styles.divider}>
                    <Text>Kikoo</Text>
                </ListItem>
                <ListItem icon>
                    <Body>
                        <Text>Pipo</Text>
                    </Body>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        </Content>
    </Layout>
);

CardsList.propTypes = {
    t: PropTypes.func,
};

export default withTranslation(CardsList);
