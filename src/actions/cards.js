import { BACKEND_URL } from 'react-native-dotenv';

export const setCards = () => async (dispatch) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/cards/list/`);
    if (response.ok) {
        const cards = await response.json();
        dispatch({
            type: 'SET_CARDS',
            cards,
        });
    }
};
