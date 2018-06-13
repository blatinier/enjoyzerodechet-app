const defaultState = {
    isReady: false,
};

const loading = (state = defaultState, { type, ...payload }) => {
    switch (type) {
        case 'READY_SET':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default loading;
