const defaultState = { loggedIn: null };

const login = (state = defaultState, { type, ...payload }) => {
    switch (type) {
        case 'LOGIN_SET':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default login;
