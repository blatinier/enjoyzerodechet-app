export const readWelcomeMsg = () => async (dispatch) => {
    console.log('YOP');
    dispatch({
        type: 'READ_WELCOME_NOTICE',
    });
};
