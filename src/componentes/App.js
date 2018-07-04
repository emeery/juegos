import React from 'react';
import {Link, Route} from 'react-router-dom';
import {JuegosPagina} from '../componentes/JuegosPagina';
class App extends React.Component {
    render() { 
        return(
            <div>
            <h1>Cabecera</h1>
            <Link to="/juegos">Juegos</Link>
            </div>

        )
    }
}
 
export default App;