import React from 'react';
import { withNavigation } from 'react-navigation';
import { Body, Icon, ListItem, Right, Text } from 'native-base';
import PropTypes from 'prop-types';

const CategoryListItem = ({ category, totalCards, navigation: { push } }) => (
    <ListItem
        onPress={() => push('CardsList', { category })}
        icon
    >
        <Body>
            <Text>
                {`(${totalCards})`}
                {category}
            </Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

CategoryListItem.propTypes = {
    category: PropTypes.string.isRequired,
    totalCards: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withNavigation(CategoryListItem);
