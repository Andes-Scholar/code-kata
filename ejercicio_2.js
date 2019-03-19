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

//['a','b','c','d','f']
function abc() {

    var completo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var letra;
    
    var primerLetra = arguments[0];
    //console.log(primerLetra);
    var posi=-1;
    
    for(j=0; j<completo.length; j++){
        if(completo[j]==primerLetra){
            posi=j;
            break;
        }
    }
    //console.log(posi);

    for(i=0; i<arguments.length; i++){
        var letraParametro = arguments[i];
        //console.log(letraParametro);
        if(letraParametro==completo[posi]){
            posi++;
        }
        else{
            //console.log(completo[posi]);
            return completo[posi];
        }
    }
    return('OK');



}

console.log(abc('a', 'b', 'd'));