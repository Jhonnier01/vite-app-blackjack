import { valorCarta, pedirCarta, crearBaraja, crearCarta, turnoComputador } from './casosuso';

let baraja = [];
let tipos = ['C', 'D', 'P', 'T'];
let especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputador = 0;

const botonPedir = document.querySelector('#btnPedir');
const botonDetener = document.querySelector('#btnDetener');
const botonNuevo = document.querySelector('#btnNuevo');
const divCartasJugadores = document.querySelectorAll('.divCartas');

const [puntosHTMLJugador, puntosHTMLComputador] = document.querySelectorAll('small');

const inicializarJuego= () => {
    baraja = crearBaraja(tipos, especiales);

    puntosHTMLComputador.innerText = 0;
    puntosHTMLJugador.innerText = 0;

    puntosComputador = 0;
    puntosJugador = 0;

    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    botonDetener.disabled = false;
    botonPedir.disabled = false;
    
}

botonPedir.addEventListener('click', () => {
    const carta = pedirCarta(baraja);

    puntosJugador += valorCarta(carta);
    puntosHTMLJugador.innerHTML = puntosJugador

    const imgCarta = crearCarta(carta);

        divCartasJugadores[0].append(imgCarta);

    if (puntosJugador >= 21) {
        console.warn('pierdes');
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputador(puntosJugador, puntosHTMLComputador, divCartasJugadores[1], baraja);
    } else if (puntosJugador === 21) {
        console.warn('ganas');
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputador(puntosJugador, puntosHTMLComputador, divCartasJugadores[1], baraja);
    }

});

botonDetener.addEventListener('click', () => {
    botonPedir.disabled = true;
    botonDetener.disabled = true;

    turnoComputador(puntosJugador, puntosHTMLComputador, divCartasJugadores[1], baraja);
});

botonNuevo.addEventListener('click', () => {
    inicializarJuego();
});