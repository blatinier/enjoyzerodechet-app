import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loading from './loading';
import login from './login';
import locale from './locale';
import cards from './cards';

export default combineReducers({
    login,
    loading,
    locale,
    cards,
    form,
});
