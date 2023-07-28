import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './'

/**
 * 
 * @param {Number} puntosMinimos los puntos del jugador
 * @param {Array<Number>} puntosJugadores arreglo de los puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento HTML con los puntos del jugador
 * @param {HTMLElement} divCartasJugadores elemento HTML con las cartas de los jugadores
 * @param {Array<String>} deck arreglo con el deck de cartas
 */


export const turnoComputadora = (puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores, deck) => {

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores )
    } while (puntosMinimos > 21 ? false : puntosComputadora <= puntosMinimos);

    determinarGanador(puntosJugadores);
};