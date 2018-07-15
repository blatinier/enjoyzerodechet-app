import { BACKEND_URL } from 'react-native-dotenv';
import { store } from '../Setup';
import { loadResponseFromLogin } from './login';

export const setCards = () => async (dispatch) => {
    const loginStore = store.getState().login;
    const response = await fetch(`${BACKEND_URL}/api/v1/user_cards/`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Token ${loginStore.token}`,
        },
    });
    if (response.ok) {
        const cards = await response.json();
        dispatch({
            type: 'SET_CARDS',
            cards,
        });
    } else if (401 === response.status) {
        dispatch(loadResponseFromLogin(loginStore));
    }
};
