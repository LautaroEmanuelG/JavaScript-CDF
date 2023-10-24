function cantidadDeVocales(phrase) {
    // Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
    // Tu código:👇
    let vocales = ["A", "E", "I", "O", "U"];
    let phraseMayus = phrase.toUpperCase();
    let cont = 0;
    vocales.forEach(vocal => {
        for (let i = 0; i < phraseMayus.length; i++) {
            phraseMayus[i] === vocal ? cont++ : null;
        }
    });
    return cont;
}

function primerDivisible(divisor, dividendo) {
    // Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
    // Tu código:👇
    while (dividendo % divisor !== 0) {
        divisor++;
    }
    return divisor;
}


function encuentraX(x) {
    //Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
    // retornar "El numero X es: ..."
    // Tu Código:👇
    for (let i = 1;i<101;i++){
        if (x===i)return `El numero X es: ${i}`
    }
}

function sumandoTodo(num) {
    // Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
    // numeros que se recorrio
    // Tu código:👇
    let cont=0;
    for (let i = 0 ;i<=num;i++){
        cont+=i;
    }
    return cont;
}

function BinarioADecimal(num) {
    // La funcion recibe por parametro, un numero binario pero en tipo de dato String
    // debes tomar este numero binario y ayudandote de un bucle pasarlo a decimal
    // tu código:👇
    return parseInt(num, 2)
}

function Fibonacci(n) {
    // Realiza una secuencia Fibonacci con el indice pasado por paramentro
    // Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
    // Tu código:👇
    return n===0?n=0:(n===1||n===2?n=1:Fibonacci(n-1)+Fibonacci(n-2));
}

function esPrimo(numero) {
    //Escribe un programa que verifique si un número dado es primo o no.
    //Un número primo es aquel que solo es divisible por 1 y por sí mismo.
    //Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
    // Tu código:👇

}

function invertirCadena(cadena) {
    //La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
    //Ejemplo: 'Hola' -> devolver 'aloH'
    //Tu codigo:👇

}

module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}