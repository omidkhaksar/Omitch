import React from 'react';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(
        reducers,
        composeEnhancer(applyMiddleware(reduxThunk))
        );
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
        <Provider store={store} >
                <App tab="home" />
        </Provider>
);