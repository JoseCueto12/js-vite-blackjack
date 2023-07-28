

/**
 * 
 * @param {Array<Number>} puntosJugadores arreglo con los puntos de los jugadores
 */

export const determinarGanador = (puntosJugadores) => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        puntosMinimos > 21
            ? alert("La computadora ha ganado")
            : puntosComputadora > 21
            ? alert("Felicidades has ganado")
            : puntosMinimos === puntosComputadora
            ? alert("Empate, nadie ha ganado")
            : alert("La computadora ha ganado");
        }, 100);
}