const defaultState = {
    language: 'en',
};

const locale = (state = defaultState, { type, ...payload }) => {
    switch (type) {
        case 'LOCALE_SET':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default locale;
