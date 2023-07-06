import _ from 'underscore';

/**
 * Esta funcion crea una nueva baraja mezclada
 * @param {Array<string>} tiposDecarta Ejemplo: ['C', 'D', 'P', 'T']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Un nuevo arrgelo de la baraja mezclada
 */
export const crearBaraja = (tiposDecarta, tiposEspeciales) => {
    if( !tiposDecarta ) throw new Error('tiposDecarta es obligatorio');
    if( !tiposEspeciales ) throw new Error('tiposEspeciales es obligatorio');
    let baraja = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDecarta) {
            baraja.push(i + tipo);
        }
    }

    for (let especial of tiposEspeciales) {
        for (let tipo of tiposDecarta) {
            baraja.push(especial + tipo);
        }
    }
    baraja = _.shuffle(baraja);
    return baraja;

}