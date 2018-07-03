const defaultState = null;

const cardsReducer = (state = defaultState, { type, cards }) => {
    switch (type) {
        case 'SET_CARDS':
            return cards;
        default:
            return state;
    }
};

export default cardsReducer;
