// var CostoProducto = (115)
// console.log("Hola mundo es mi primer script");
// console.log(238467923)
// console.log("238742")
// console.log(CostoProducto)

// let num1 = 2;
// let num2 = 3;

// resultado = num1 + num2;
// console.log(resultado);

// let edadJuan = 28, edadMirta = 15, edadCarlos = 20;

// if(edadJuan >= edadCarlos){
//     console.log("Juan es mayor que Carlos");
// }
// else{
//     console.log("Carlos es Mayor que Juan");
// }
// document.getElementById("demo").= "Hola, esto es algo distinto"

// ###############################################################
// Obtener de entre dos numeros pasados por parametro a un funcion cual
//  es el mayor de ambos y en caso de que sean iguales devolver el texto son iguales

// function compNum(nro1, nro2){
//     if (nro1 == nro2){
//         console.log("Los numeros son iguales");
//     }else if (nro1 > nro2) {
//         console.log("El numero 1 es mayor al numero 2");
//     }else{
//         console.log("El numero 2 es mayor al numero 1");
//     }
// }

// let resultado = compNum(5,5);

// console.log(resultado);

// ##############################################################
// hacer una funcion para determinar si una palabra o frase es palindromo

// function esPalindromo(str){
//     const largo = string.length;
//     for(let i=0;i<largo/2;i++){
//         if(string[i] !== string[largo - 1 - i]){
//             console.log("No es un palindromo");
//         }
//     }
//     console.log("Es un palindromo")
// }

// const string = prompt("ingrese un numero");

// const value = esPalindromo(string);

// ##############################################################
// Algoritmo para determinar si un numero es o no primo

// function detectPrimo (){
//     const number = parseInt(prompt("Introduzca un numero natural"));
//     let esPrimo = true;
//     if (number === 1){
//         console.log("1 no es un numero primo ni compuesto");
//     }else if(number > 1){
//         for (let i = 2; i < number; i++){
//             if (number % i == 0){
//                 esPrimo = false;
//                 break;
//             }
//         }
//         if (esPrimo){
//             console.log(number + " es un numero primo.");
//         }else{
//             console.log(number + " no es un numero primo.");
//         }
//     }else{
//         console.log(number + " no es un numero primo");
//     }
// }
// detectPrimo();


// ##############################################################
// Pruebas hechas con JavaScript orientado a objetos



const user = {
    name: "carlos", //propiedad o par clave valor
    lastname: "perez",
    age: "10",

};

console.log( typeof user );
console.log(user);
