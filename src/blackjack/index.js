import _ from 'underscore';
import { crearDeck, pedirCarta, turnoComputadora, crearCarta, acumularPuntos  } from './usecases/index'
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js'


/***
 *  2C = Two of Clubs (Tréboles)
 *  2D = Two of Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

//colocar una función entre parentesis y seguido colocar otros parentesis hace que sea autoinvocable
const miModulo = (() => {
  //evalua el codigo de manera más estricta y genera más restricciones de codigo
  "use strict";

    let deck = [],
        tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"],
        puntosJugadores = [];
    //Referencias del HTML

    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo = document.querySelector("#btnNuevo"),
          puntosHTML = document.querySelectorAll("small"),
          divCartasJugadores = document.querySelectorAll(".divCartas");


    

    
    //Está función inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck( tipos,especiales );

        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++)
        {
            puntosJugadores.push(0);
        }

            puntosHTML.forEach( elem => elem.innerText = 0 );
            divCartasJugadores.forEach( elem => elem.innerHTML = "" );

            btnPedir.disabled = false;
            btnDetener.disabled = false;
            
    }


    // ---------------------------------------------------------------------------
    // Eventos
    //Acción del botón Pedir carta
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta( deck );
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

        crearCarta( carta, 0, divCartasJugadores );

        if (puntosJugador > 21) {
        console.warn("Lo sentimos, has perdido");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
        } else if (puntosJugador === 21) {
        console.warn("21, Genial");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
        }
    });

    //Acción del boón detener
    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores, deck);
    });

    btnNuevo.addEventListener("click", () => {
        inicializarJuego();
    });


    //para poder tener acceso desde otra parte del codigo la fución debe tener un return
    //donde se mandara aquello que necesita hacerse publico o accesible 

    return {
        nuevoJuego: inicializarJuego
    };

})();
