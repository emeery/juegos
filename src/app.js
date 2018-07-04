import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Tienda from './tienda/Tienda';
import AppRouter from './routers/AppRouter';


import 'normalize.css/normalize.css';
const tienda = Tienda();

const jsx = (
    <Provider 
    store={tienda} 
    >
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

