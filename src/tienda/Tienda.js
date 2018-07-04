import { createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
import JuegosReducer from '../reducers/JuegosReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            juegos: JuegosReducer
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    ); return tienda;
};