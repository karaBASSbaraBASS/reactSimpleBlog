import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../reducers/index';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://simple-blog-api.crew.red/',
    responseType: 'json'
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(axiosMiddleware(client)),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : f => f
        )
    );
}