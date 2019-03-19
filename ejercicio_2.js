/*
Descripción del ejercicio:

El objetivo del juego consiste en encontrar la letra perdida.

Desarrolle un algoritmo que dado un array de entrada de letras (consecutivas y ordenadas en forma ascendente) y retorne la letra faltante.

precondiciones:

1- Ud. siempre recibirá un array válido.
2- Sólo será exactamente una letra la que deba ser encontrada.
3- La longitud del array como mínimo es 2.
4- Que contemple la posibilidad de ser case sensitive es opcional.

Ejemplo:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'


** IMPORTANTE: Antes de escribir su código, cree un branch con su nombre o el de su equipo. Luego deberá subir al repositorio su resolución!

*/
var alfabeto = 'abcdefghijklnopqrstuvwxyz';
var arreglo = ['a','b','c','d','f'];

function main(arreglo){

    var primerCaracter = -1;
var result='';
    if(arreglo.length < 2){
        return 'error, muy corto';
    }
    for(var index in alfabeto){
        if(arreglo[0].toLowerCase() == alfabeto[index]){           
            primerCaracter = index;       
        }
    }

    for(var i = 0; i < arreglo.length ; i++){
        if(i+1 < arreglo.length ){     
            if(arreglo[i+1]!=alfabeto[ parseInt(primerCaracter,10)+1]){
               return alfabeto[parseInt(primerCaracter,10)+1];                
            }
        }
        primerCaracter++;
    }
}

console.log( main(['a','b','c','d','f']));
console.log( main(['O','Q','R','S']));