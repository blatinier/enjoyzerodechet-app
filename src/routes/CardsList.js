import { flowRight, map } from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { Content, List, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import CardListItem from '../components/CardListItem';
import ProgressHummingBird from '../components/ProgressHummingBird';
import colors from '../theme/colors';
import withTranslation from '../i18n';
import { setCards } from '../actions';

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

const CardsList = ({ cards, t }) => (
    <Layout title={t('cards')}>
        <Content style={styles.container}>
            <View style={styles.progress}>
                <ProgressHummingBird percent={63} />
            </View>
            <List>
                { null === cards || !cards.results ? <Spinner /> :
                    map(cards.results, ({ title, slug }) => (
                        <CardListItem
                            key={slug}
                            slug={slug}
                            title={title}
                        />
                    ))}
            </List>
        </Content>
    </Layout>
);

CardsList.propTypes = {
    cards: PropTypes.shape({}),
    t: PropTypes.func,
};

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = { setCards };

export default flowRight(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        async componentDidMount() {
            await this.props.setCards();
        },
    }),
    withTranslation,
)(CardsList);
