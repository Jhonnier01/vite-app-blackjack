
/**
 * Esta funcion me permite tomar una carta de la baraja
 * @param {Array<string>} baraja 
 * @returns retorna la crat de la baraja
 */
export const pedirCarta = (baraja) => {
    if (!baraja || baraja.length === 0) {
        throw 'no hay cartas en la baraja';
    }
    return baraja.pop();
}