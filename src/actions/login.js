import { BACKEND_URL } from 'react-native-dotenv';

export const setLoginState = (loggedIn) => ({
    type: 'LOGIN_SET',
    loggedIn,
});

export const loadResponseFromLogin = (credentials) => async (dispatch) => {
    const response = await fetch(`${BACKEND_URL}login`, {
        body: JSON.stringify(credentials),
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
    });
    dispatch(setLoginState(response.ok));

    return response.status;
};

export const logout = () => async (dispatch) => {
    await fetch(`${BACKEND_URL}logout`, {
        credentials: 'include',
        method: 'GET',
    });
    await dispatch(setLoginState(false));
};
