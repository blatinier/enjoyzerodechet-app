const defaultState = { firstTimer: true };

const welcomeReducer = (state = defaultState, { type }) => {
    switch (type) {
        case 'READ_WELCOME_NOTICE':
            return { firstTimer: false };
        default:
            return state;
    }
};

export default welcomeReducer;
