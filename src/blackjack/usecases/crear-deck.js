import _ from "underscore";


/**
 * Está función crea un nuevo deck
 * @param {Array<String>} tiposCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if( !tiposCarta || tiposCarta.length === 0 )
    throw new Error('tiposCarta es obligatorio como un arreglo string');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0 )
    throw new Error('tiposEspeciales es obligatorio como un arreglo string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
        deck.push(i + tipo);
    }
    }

    for (let esp of tiposEspeciales) {
    for (let tipo of tiposCarta) {
        deck.push(esp + tipo);
    }
    }

    return _.shuffle(deck);
};

// export default crearDeck;