const defaultState = { loggedIn: null, login: null, password: null, token: null };

const login = (state = defaultState, { type, ...payload }) => {
    switch (type) {
        case 'LOGIN_SET':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default login;
