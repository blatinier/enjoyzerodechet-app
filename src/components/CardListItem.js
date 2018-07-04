import React from 'react';
import { Body, Icon, ListItem, Right, Text } from 'native-base';
import PropTypes from 'prop-types';

const CardListItem = ({ card: { title } }) => (
    <ListItem icon>
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
        title: PropTypes.string.required,
    }),
};

export default CardListItem;
