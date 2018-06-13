import React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducer';
import getTheme from './theme/components';

const persistConfig = {
    key: 'root',
    whitelist: ['locale', 'login'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);

const persistor = persistStore(store);

const Setup = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <StyleProvider style={getTheme()}>
                <App />
            </StyleProvider>
        </PersistGate>
    </Provider>
);

export default Setup;
