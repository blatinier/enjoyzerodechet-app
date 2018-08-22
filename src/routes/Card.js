import { flowRight } from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { Content, List } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import colors from '../theme/colors';
import withTranslation from '../i18n';
import { setCard } from '../actions';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
});

const Card = ({ card, t }) => (
    <Layout>
        <Content style={styles.container}>
            <List />
        </Content>
    </Layout>
);

Card.propTypes = {
    card: PropTypes.shape({}),
    t: PropTypes.func,
    navigation: PropTypes.shape({
        push: PropTypes.func,
    }),
};

const mapStateToProps = ({ card }) => ({ card });

const mapDispatchToProps = { setCard };

export default flowRight(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        async componentDidMount() {
            await this.props.setCard(this.props.navigation.getParam('slug'));
        },
    }),
    withTranslation,
    withNavigation,
)(Card);
