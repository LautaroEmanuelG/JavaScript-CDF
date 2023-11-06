/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida(name, surname) {
    return `Bienvenido ${name} ${surname}`;
}
/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
function calc(num1, operador, num2) {
    if (operador === "+") {
        return num1 + num2;
    } else if (operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        return num1 / num2;
    }
}
/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp(max, min, percentLluvia) {
    let msj
    if (max < 15) {
        msj = 'Es recomendable salir con abrigo';
    } else if (max < 26 && min > 17) {
        msj = 'El día está lindo';
    } else if (min > 25) {
        msj = 'El día estará caluroso';
    }

    return percentLluvia > 50 ? `${msj}, recomendable un paraguas` : msj;
}
/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:
function arrayDeStrings(arr) {
    let arrFilter
    arr.forEach(word => {
        if (arr.length > 5) arrFilter.push(word)
    });
    return arrFilter;
}
/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
function stringInverso(word) {
    return word.split(' ').reverse().join('')
}
/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:
function personaMásJoven(personas) {
    let menor;
    personas.forEach(persona => {
        if (persona.edad < menor) {
            menor = persona
        }
    });
    return menor;
}
/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:
function contadorDeLetras(palabra) {
    var cantLetras = {
    }
    //Pasamos la palabra a minuscula y la separamos para recorrerla en el foreach
    palabra = palabra.toLowerCase().split('');
    //Recorro y agrego vocal al objeto con sus contadores
    palabra.forEach(letra => {
        
    })
    return cantLetras
}
/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
const sueldoMasAlto = (empleados) => {
    let empMayorSueldo;
    empleados.forEach(empleado => {
        if (empleado.sueldo > empMayorSueldo) empMayorSueldo = empleado;
    })
    return empMayorSueldo;
}
/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:
const aprobados = (estudiantes) => {
    let aprobados=[];
    for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 80) aprobados.push(estudiantes[i].nombre);
    }
    return aprobados;
}
/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}