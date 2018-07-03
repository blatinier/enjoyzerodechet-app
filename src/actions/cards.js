import { BACKEND_URL } from 'react-native-dotenv';
import { store } from '../Setup';

export const setCards = () => async (dispatch) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/user_cards/`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Token ${store.getState().login.token}`,
        },
    });
    if (response.ok) {
        const cards = await response.json();
        dispatch({
            type: 'SET_CARDS',
            cards,
        });
    }
};
