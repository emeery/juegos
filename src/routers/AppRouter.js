import React from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import App from '../componentes/App';
import JuegosPagina from '../componentes/JuegosPagina';
const AppRouter = () => (
    
    <BrowserRouter>
        <div>
        <App/>
        <Route path="/juegos" exact={true} component={JuegosPagina}/>
        </div>
        
    </BrowserRouter>
); 
export default AppRouter;
