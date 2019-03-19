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

//letraabc(['a', 'b', 'c', 'd', 'f']);
letraabc(['o','p','r','s']);

function letraabc(Arrayabc) {
    // var bonus = true;
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var posicionLetra;
    var x = true;
    var result;
    posicionLetra = abc.indexOf(Arrayabc[0]);
    for (let i = 1; i < Arrayabc.length; i++) {
        if(x){
            if (posicionLetra == abc.indexOf(Arrayabc[i]) - 1) {
                posicionLetra = abc.indexOf(Arrayabc[i]) - 1;
            }
            else{
                x = false;
                result = abc[abc.indexOf(Arrayabc[i]) - 1];
            }
        }
    }
    console.log(result);
}

