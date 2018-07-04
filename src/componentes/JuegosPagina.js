import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import JuegosLista from '../componentes/JuegosLista';
import {cargaJuegos} from '../acciones';
class JuegosPagina extends React.Component {
    componentDidMount() {
        this.props.cargaJuegos();
    }
    render() { 
        return (
            <div> <h2>Lista de Juegos</h2>
            <JuegosLista 
            juegos={this.props.juegos}
            />
            </div>
            
        )
    }
}
JuegosPagina.propTypes = {
    juegos: PropTypes.array.isRequired,
    cargaJuegos: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {juegos: state.juegos }
}
export default connect(mapStateToProps, {cargaJuegos})(JuegosPagina);