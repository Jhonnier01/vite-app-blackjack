
/**
 * Funcion para crear un elemento HTML de una carta
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCarta = (carta) => {
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        return imgCarta;
        
}