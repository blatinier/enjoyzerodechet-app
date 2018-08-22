import React from 'react';
import { withNavigation } from 'react-navigation';
import { Body, Icon, ListItem, Right, Text } from 'native-base';
import PropTypes from 'prop-types';

const CardListItem = ({ slug, title, navigation: { push } }) => (
    <ListItem
        onPress={() => push('Card', { slug })}
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
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
        push: PropTypes.func,
    }),
};

export default withNavigation(CardListItem);
