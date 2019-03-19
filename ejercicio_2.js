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
function busca_letra(arreglo){
    if (arreglo.length < 2){
        return "Longitud incorrecta."
    }
    var numero=arreglo[0].toUpperCase().charCodeAt(0);
    for(var indice=1;indice < arreglo.length; indice ++){
        var letra= arreglo[indice].toUpperCase();
        numero++;
        if (letra.charCodeAt(0)!=numero){
            return String.fromCharCode(numero);
        }
}
return "No falta ninguna letra.";
}

console.log(busca_letra(['a','b','c','d','f']));
console.log(busca_letra(['O','q','R','S','T','U','V','w','X','Y','Z']));
console.log(busca_letra(['Q','R','S','T','U','V','w','X','Y','Z']));
console.log(busca_letra(['a']));
