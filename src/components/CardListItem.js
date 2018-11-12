import React from 'react';
import { Body, ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';

const CardListItem = ({ name, card }) => (
    <ListItem>
        <Body>
            <Text>{name}</Text>
        </Body>
    </ListItem>
);

CardListItem.propTypes = {
    card: PropTypes.shape({}),
    name: PropTypes.string.isRequired,
};

export default CardListItem;
