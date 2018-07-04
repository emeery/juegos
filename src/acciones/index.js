export function cargaJuegos() {
    return dispatch => {
        fetch('/api/juegos');
    }
}