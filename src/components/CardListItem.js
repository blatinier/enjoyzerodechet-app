import React from 'react';
import { withNavigation } from 'react-navigation';
import { Body, Icon, ListItem, Right, Text } from 'native-base';
import PropTypes from 'prop-types';

const CardListItem = ({ card: { id, title }, navigation: { push } }) => (
    <ListItem
        onPress={() => push('Card', { id })}
        icon
    >
        <Body>
            <Text>{title}</Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

CardListItem.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
    navigation: PropTypes.shape({
        push: PropTypes.func,
    }),
};

export default withNavigation(CardListItem);
