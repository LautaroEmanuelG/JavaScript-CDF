// querySelects

const btnScissors = document.querySelector('#btnSelectTijera');
const btnRock = document.querySelector('#btnSelectPiedra');
const btnPaper = document.querySelector('#btnSelectPapel');
const btnReload = document.querySelector('#reinicio');
const spanVidasEnemy = document.querySelector('#vidaPC')
const spanVidasPlayer = document.querySelector('#vidaPlayer')
const sectionMSJ = document.getElementById("resultadodos")
const ataquesPlayer = document.getElementById("ataques-player")
const ataquesEnemigo = document.getElementById("ataques-enemigo")
const sectionReinicio = document.querySelector('#sectionReinicio')
const divVS = document.querySelector('.p_vs')



// Events

btnPaper.addEventListener('click', paperSelected)
btnScissors.addEventListener('click', scissorsSelected)
btnRock.addEventListener('click', rockSelected)
btnReload.addEventListener('click', reloadgame)

// Variables

// Importante a tener en cuenta!!!
let ataquePCRandom;  // Se le asigna un valor en la funcion AtaquePC();
let ataquePlayer;   // Se le asigna el valor tipo 'string' en las funciones ScissorsSelected, rockSelected y paperSelected.
let pointsPlayer = 3; // Puntos de vida del jugador
let pointsEnemy = 3; // Puntos de vida de la PC

// Las funciones ScissorsSelected, rockSelected y paperSelected se llaman cuando el jugador selecciona un ataque.
// Estas tendran que asignarle el valor correspondiente a la funcion. ejemplo: Player selecciona tijera.
// entonces en la funcion scissorsSelected. tendra que asigar el valor 'tijera' a la variable *ataquePlayer* y juego llamar a la funcion ataquePC();
function scissorsSelected(){
    ataquePlayer = 'tijera';
    ataquePC();
}
function rockSelected(){
    ataquePlayer = 'piedra';
    ataquePC();
}
function paperSelected(){
    ataquePlayer = 'papel';
    ataquePC();
}
// ataquePC se encarga de asignarle un ataque random a la PC. debajo de la variable randomAttack tendras que asignar el valor correspondiente a la variable *ataquePCRandom*
// segun la siguiente lógica: 
//Si randomAttack = 1 ->  AtaquePCRandom deberia guardar el valor 'piedra'
//Si randomAttack = 2 ->  AtaquePCRandom deberia guardar el valor 'papel'
//Si randomAttack = 3 ->  AtaquePCRandom deberia guardar el valor 'tijera'
// luego de tener el valor llamar a la funcion combat();

function ataquePC() {
    let randomAttack = random(1,3) // NO MODIFICAR
// Tu código:
    switch (randomAttack) {
        case 1:
            ataquePCRandom = 'piedra';
            break;
        case 2:
            ataquePCRandom = 'papel';
            break;
        case 3:
            ataquePCRandom = 'tijera';
            break;
        default:
            break;
    }
    combat();
}

// En esta funcion se realiza la lógica del juego. Es decir: 
// Si el player eligio 'papel' y la pc tambíen. es un empate, se llama a la funcion 'msjResult()' pasando por argumento 'Empate'
// Si player eligio 'papel' y pc 'piedra'. gana player, se llama a la funcion 'msjResult()' pasando por argumento 'Ganaste' y se le resta una vida a la PC
// Asi para todos los posibles casos de elecciones. Y al final de esta funcion se llama a la funcion 'revisarvida()'   
// spanVidasEnemy o spanVidasPlayer => vida actualizada del jugador
function combat(){
// Tu código:
    if (ataquePlayer === ataquePCRandom) {
        msjResult('Empate');
    } else if (ataquePlayer === 'papel' && ataquePCRandom === 'piedra') {
        msjResult('Ganaste');
        pointsEnemy--;
        spanVidasEnemy.innerHTML = pointsEnemy;
        revisarvida();
    } else if (ataquePlayer === 'tijera' && ataquePCRandom === 'papel') {
        msjResult('Ganaste');
        pointsEnemy--;
        spanVidasEnemy.innerHTML = pointsEnemy;
        revisarvida();
    } else if (ataquePlayer === 'piedra' && ataquePCRandom === 'tijera') {
        msjResult('Ganaste');
        pointsEnemy--;
        spanVidasEnemy.innerHTML = pointsEnemy;
        revisarvida();
    } else if (ataquePlayer === 'papel' && ataquePCRandom === 'tijera') {
        msjResult('Perdiste');
        pointsPlayer--;
        spanVidasPlayer.innerHTML = pointsPlayer;
        revisarvida();
    } else if (ataquePlayer === 'tijera' && ataquePCRandom === 'piedra') {
        msjResult('Perdiste');
        pointsPlayer--;
        spanVidasPlayer.innerHTML = pointsPlayer;
        revisarvida();
    } else if (ataquePlayer === 'piedra' && ataquePCRandom === 'papel') {
        msjResult('Perdiste');
        pointsPlayer--;
        spanVidasPlayer.innerHTML = pointsPlayer;
        revisarvida();
    }
}

// En esta funcion tendras que hacer la lógica de las vidas de los jugadores. Es decir: 
// si player se queda sin vidas debe enviar un alert 'perdiste la partida :('
// si enemigo se queda sin vidas debe enviar un alert 'ganaste la partida :D'

function revisarvida(){
// Tu código:
    if (pointsPlayer === 0) {
        alert('Perdiste la partida :(');
    } else if (pointsEnemy === 0) {
        alert('Ganaste la partida :D');
    }
}

  ///////////////////////////////////////////////////////////////////////////////////
 // NO MODIFICAR NADA A PARTIR DE ACÁ.                                           //
/////////////////////////////////////////////////////////////////////////////////

function msjResult(msj) {
    let nuevoAtaquePlayer = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let msjVS = document.createElement('p')

    sectionMSJ.innerHTML = msj
    nuevoAtaquePlayer.innerHTML = ataquePlayer
    nuevoAtaqueEnemigo.innerHTML = ataquePCRandom
    msjVS.innerHTML= '⚔️'

    ataquesPlayer.appendChild(nuevoAtaquePlayer)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
    divVS.appendChild(msjVS)
}

function reloadgame(){
    location.reload();
}

function random(min, max){
    return Math.floor(Math.random()*(max - min + 1 ) + min)
}

//window.addEventListener('load')

