// let vocales = ["A", "E", "I", "O", "U"];
// let phrase = "Hola Mundo"
// let phraseMayus = phrase.toUpperCase();
// let cont = 0;
// console.log(phraseMayus)
// vocales.forEach(vocal => {
//     console.log(vocal)
//     phraseMayus = phrase.toUpperCase();
//     for (let i = 0; i < phraseMayus.length; i++) {
//         phraseMayus[i]===vocal?cont++:null;
//     }
// });
// console.log(cont)
// let divisor = 1;
// let dividendo = 7;
// let num = divisor;
// while (dividendo % num !== 0) {
//     divisor++;
//     console.log(num,divisor,dividendo)
// }
// console.log(num)
// let numeroBinario=111;
// const numeroDecimal = parseInt(numeroBinario, 2);
// console.log(numeroDecimal)
// function Fibonacci(n) {
//     // Realiza una secuencia Fibonacci con el indice pasado por paramentro
//     // Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
//     // Tu código:👇
//     return n===0?n=0:(n===1||n===2?n=1:Fibonacci(n-1)+Fibonacci(n-2));
// }
// console.log(Fibonacci(7))
// let pal="aloH";
// let reves ="";
// letras = pal.split('');
// for (let i = pal.length-1; i >= 0; i--) {
//     reves+=letras[i];
// }
// console.log(reves)
// let str = "hoLA"
// let palabra = str.slice(0,1).toUpperCase() + str.slice(1).toLocaleLowerCase()
// console.log(str2);
// let arr = [1,1,2,4,5,6,6,7,1,8,9];
// let arrSinDuplicados = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         arrSinDuplicados.includes(arr[i])? null : arrSinDuplicados.push(arr[i]);
//     }
//     console.log(arrSinDuplicados);
// let matriz = [[1, 2, 4],[7, 9, 8],[7, 10, 11]];
// let matrizTranspuesta = [[],[],[]];
//     for (let i = 0; i < matriz.length; i++){
//         for (let j = 0; j < matriz[i].length; j++){
//             console.log(matriz[j][i])
//             matrizTranspuesta[i][j] = matriz[j][i];
//         }
//     }
//     console.log(matriz);
//     console.log(matrizTranspuesta);