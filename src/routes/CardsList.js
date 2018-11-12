import { flowRight, groupBy, map } from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Content, List, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import CardListItem from '../components/CardListItem';
import ProgressHummingBird from '../components/ProgressHummingBird';
import colors from '../theme/colors';
import withTranslation from '../i18n';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
        flex: 1,
        flexDirection: 'column',
    },
    progress: {
        alignItems: 'center',
        left: 60,
        top: 70,
    },
});

const CardsList = ({
    cards,
    navigation: {
        state: {
            params: {
                category,
            },
        },
    },
    t }) => {
    const categories = cards.results ? groupBy(cards.results, 'category') : [];

    return (
        <Layout title={t('cards')}>
            <Content style={styles.container}>
                <View style={styles.progress}>
                    <ProgressHummingBird percent={63} />
                </View>
                <List>
                    { categories && categories[category] ?
                        map(categories[category], (card) => (
                            <CardListItem
                                key={card.slug}
                                name={card.title}
                                card={card}
                            />
                        )) : <Spinner />}
                </List>
            </Content>
        </Layout>
    );
};

CardsList.propTypes = {
    cards: PropTypes.shape({}),
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                category: PropTypes.string.isRequired,
            }),
        }),
    }),
    t: PropTypes.func,
};

const mapStateToProps = ({ cards }) => ({ cards });

export default flowRight(
    connect(mapStateToProps),
    withTranslation,
)(CardsList);
