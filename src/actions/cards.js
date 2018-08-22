import { BACKEND_URL } from 'react-native-dotenv';

export const setCards = () => async (dispatch) => {
    const url = `${BACKEND_URL}/api/v1/cards/list/`;
    const response = await fetch(url);
    if (response.ok) {
        const cards = await response.json();
        dispatch({
            type: 'SET_CARDS',
            cards,
        });
    }
};
