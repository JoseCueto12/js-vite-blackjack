
/**
 * 
 * @param {String} carta String con el valor de la carta
 * @param {Number} turno número con el turno del jugador 
 * @param {HTMLElement} divCartasJugadores elemento HTML 
 */

export const crearCarta = ( carta, turno, divCartasJugadores ) => {

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);

}