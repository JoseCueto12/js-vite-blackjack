

/**
 * 
 * @param {Array<String>} deck El deck de cartas
 * @returns retorna el deck menos la carta que se pidio
 */

export const pedirCarta = ( deck ) => {
    if ( !deck || deck.length === 0 ) {
    throw new Error("No hay cartas en el deck");
    }
    return  deck.pop();
};

// export default pedirCarta;