import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loading from './loading';
import locale from './locale';
import cards from './cards';
import welcome from './welcome';

export default combineReducers({
    loading,
    locale,
    cards,
    welcome,
    form,
});
