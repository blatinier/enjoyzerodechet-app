import { BACKEND_URL } from 'react-native-dotenv';
import base64 from 'base-64';

export const setLoginState = (loggedIn, token) => ({
    type: 'LOGIN_SET',
    loggedIn,
    token,
});

export const loadResponseFromLogin = ({ login, password }) => async (dispatch) => {
    const auth = base64.encode(`${login}:${password}`);
    const response = await fetch(`${BACKEND_URL}/api/v1/users/login/`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Basic ${auth}`,
        },
        method: 'POST',
    });
    if (response.ok) {
        const { token } = await response.json();
        dispatch(setLoginState(true, token));
    }

    return response.ok;
};

export const logout = () => async (dispatch) => {
    await dispatch(setLoginState(false, null));
};
