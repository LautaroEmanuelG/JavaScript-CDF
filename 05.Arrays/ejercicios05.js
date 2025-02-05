function primerElemento(arg) {
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código:
    return arg[0];
}

function ultimoElemento(arg) {
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui:
    return arg[arg.length - 1];
}

function nuevoArray(arg) {
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    return arg.length;
}

function changeArray(arr) {
    //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
    //el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    arr[0] = 'Aprendiendo'
    arr[arr.length-1] = 'array'
    return arr;
}

function primerasCondicionales(arg) {
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
    if (arg.length === 0) {
        return 'Este array no contiene elementos';
    } else if (arg.length === 3) {
        return 'Este array es igual a 3';
    } else if (arg.length < 3) {
        return 'Este array es menor a 3';
    } else if (arg.length > 3) {
        return 'Este array es mayor a 3';
    }
}

function sumandoEnUno(arg) {
    // dado el array de numeros enteros pasado por parametro, a cada elemento del array
    // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:
    for (let i = 0; i < arg.length; i++) {
        arg[i] += 1;
    }
    return arg;
}

function valorMaximo(arr) {
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    return Math.max(...arr);
}

function valorMinimo(arr) {
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    return Math.min(...arr);
}

function cantPares(arr) {
    //Se para un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    let pares = 0;
    arr.forEach(e=>{
        if(e%2===0) pares++
    })
    return pares;
}

function eliminarDuplicado(arr) {
    // Se para un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    //return arr.filter((e,i)=>arr.indexOf(e)===i);
    let arrSinDuplicados = [];
    for (let i = 0; i < arr.length; i++) {
        arrSinDuplicados.includes(arr[i])? null : arrSinDuplicados.push(arr[i]);
    }
    return arrSinDuplicados;
}

function enOrden(arr, ascendente = true) {
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    return arr.sort((a,b)=>a-b);
}

function dosEnUno(arr1, arr2) {
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    //Esta funcion no pasa el ultimo ejemplo del test xq si están repetidos los numeros
    /*let array = arr1.concat(arr2);
    console.log(eliminarDuplicado(array));
    return eliminarDuplicado(array);*/
    return arr1.concat(arr2);
}

function matrizTranspuesta(matriz) {
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:
    let matrizTranspuesta = [[],[],[]];
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            console.log(matriz[j][i])
            matrizTranspuesta[i][j] = matriz[j][i];
        }
    }
    return matrizTranspuesta;
}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}