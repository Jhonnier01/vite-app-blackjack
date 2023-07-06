import { pedirCarta, valorCarta, crearCarta } from './'

/**
 * Funcionm que genera el turno del computador
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 */
export const turnoComputador = (puntosMinimos, puntosHTMLComputador, divCartasComputador, baraja = []) => {

    let puntosComputador = 0;
    do {
        const carta = pedirCarta(baraja);

        puntosComputador += valorCarta(carta);
        puntosHTMLComputador.innerHTML = puntosComputador

        const imgCarta = crearCarta(carta);

        divCartasComputador.append(imgCarta);
    } while ((puntosComputador < puntosMinimos) && puntosMinimos <= 21);

    setTimeout(() => {

        if (puntosComputador === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computador gana');
        } else if (puntosComputador > 21) {
            alert('Jugador gana');
        } else {
            alert('Computador gana');
        }
    }, 100)
}