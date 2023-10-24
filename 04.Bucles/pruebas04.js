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
function Fibonacci(n) {
    // Realiza una secuencia Fibonacci con el indice pasado por paramentro
    // Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
    // Tu código:👇
    return n===0?n=0:(n===1||n===2?n=1:Fibonacci(n-1)+Fibonacci(n-2));
}
console.log(Fibonacci(7))