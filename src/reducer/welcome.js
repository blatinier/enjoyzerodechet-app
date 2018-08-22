const defaultState = { firstTimer: true };

const welcomeReducer = (state = defaultState, { type }) => {
    switch (type) {
        case 'READ_WELCOME_NOTICE':
            return { firstTimer: true };
        default:
            return state;
    }
};

export default welcomeReducer;
