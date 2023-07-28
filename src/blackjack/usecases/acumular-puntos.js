import { valorCarta } from "./";

/**
 * 
 * @param {String} carta valor de la carta
 * @param {Number} turno numero del turno del jugador
 * @param {Array<Number>} puntosJugadores arreglo de los puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento HTML de los puntos de los jugadores
 * @returns 
 */

export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];

}