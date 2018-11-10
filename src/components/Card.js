import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warmGray,
    },
});

const Card = ({ name, card }) => (
    <Layout>
        <Content style={styles.container}>
            <Text>{name}</Text>
        </Content>
    </Layout>
);

Card.propTypes = {
    card: PropTypes.shape({}),
};

export default Card;
