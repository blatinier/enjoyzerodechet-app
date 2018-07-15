import { flowRight } from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { Content, List, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import CardListItem from '../components/CardListItem';
import colors from '../theme/colors';
import withTranslation from '../i18n';
import { setCards } from '../actions';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
});

const CardsList = ({ cards, t }) => (
    <Layout title={t('cards')} settingsButton>
        <Content style={styles.container}>
            <List>
                { null === cards ? <Spinner /> :
                    cards.map((card) => <CardListItem key={card.id} {...card} />)}
            </List>
        </Content>
    </Layout>
);

CardsList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})),
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
