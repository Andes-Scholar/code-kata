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


var abcdario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];


console.log(revisar(['O','Q','R','S'] ))
console.log(revisar(['a','b','c','d','f'] ))

function revisar(valor){
    if(Array.isArray(valor))
    {
        var initIndex =  abcdario.indexOf(valor[0].toLowerCase());  
        // console.log(initIndex);

        for (let i = 0; i < valor.length; i++) {
            
            if(valor[i].toLowerCase() !== abcdario[initIndex])
            {
                return abcdario[initIndex];
            }

            initIndex++;
        }
    }
}