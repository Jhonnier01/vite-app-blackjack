let modulo = (() => {

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
        baraja = crearBaraja();

        puntosHTMLComputador.innerText = 0;
        puntosHTMLJugador.innerText = 0;

        puntosComputador = 0;
        puntosJugador = 0;

        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        botonDetener.disabled = false;
        botonPedir.disabled = false;
        
    }

    const crearBaraja = () => {
        baraja = [];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                baraja.push(i + tipo);
            }
        }

        for (let especial of especiales) {
            for (let tipo of tipos) {
                baraja.push(especial + tipo);
            }
        }
        baraja = _.shuffle(baraja);
        return baraja;

    }


    const pedirCarta = () => {
        if (baraja.length === 0) {
            throw 'no hay cartas en la baraja';
        }
        return baraja.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return isNaN(valor) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    const crearCarta = (carta, jugador) => {
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');

            divCartasJugadores[jugador].append(imgCarta);
    }

    const turnoComputador = (puntosMinimos) => {
        do {
            const carta = pedirCarta();

            puntosComputador += valorCarta(carta);
            puntosHTMLComputador.innerHTML = puntosComputador

            crearCarta(carta, 1);
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



    botonPedir.addEventListener('click', () => {
        const carta = pedirCarta();

        puntosJugador += valorCarta(carta);
        puntosHTMLJugador.innerHTML = puntosJugador

        crearCarta(carta, 0);

        if (puntosJugador >= 21) {
            console.warn('pierdes');
            botonPedir.disabled = true;
            botonDetener.disabled = true;
            turnoComputador(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('ganas');
            botonPedir.disabled = true;
            botonDetener.disabled = true;
            turnoComputador(puntosJugador);
        }

    });

    botonDetener.addEventListener('click', () => {
        botonPedir.disabled = true;
        botonDetener.disabled = true;

        turnoComputador(puntosJugador);
    });

    botonNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

})()