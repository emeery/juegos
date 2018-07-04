import React from 'react';
import PropTypes from 'prop-types'; 
const JuegosLista = ({ juegos }) => {
    const sinJuegos = (
        <p>No hay juegos en tu colleción</p>
    )
    const listaDeJuegos = (
        <p>Lista de Juegos</p>
    )
    return( <div>
        {juegos.length === 0 ? sinJuegos : listaDeJuegos}
        </div>)
}
JuegosLista.propTypes = {
    juegos: PropTypes.array.isRequired
} 

export default JuegosLista;