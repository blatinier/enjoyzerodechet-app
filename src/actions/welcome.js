export const readWelcomeMsg = () => async (dispatch) => {
    dispatch({
        type: 'READ_WELCOME_NOTICE',
    });
};
