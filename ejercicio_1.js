/*
Descripción del ejercicio:

El objetivo del juego consiste en diseñar un pequeño programa en javascript para calcular el resultado
de un juego de dardos.
Para ello, debemos sumar los valores de acuerdo a la siguiente tabla:

Scoring: 
0 puntos - si el radio está por arriba de 10.
5 puntos - si el radio está entre 5 y 10 ambos inclusive.
10 puntos - si el radio es menor estricto que 5.
Si todos los valores obtenidos de la partida son menores que 5, se recibe una recompensa de 100 puntos extra!

Por lo tanto, deberá escribir el programa que acepte un array de radios correspondiente a una partida (pueden ser valores enteros o de punto flotante)
y devolver el puntaje total de acuerdo al scoring descripto anteriormente.

Un array vacío debe devolver como resultado 0 (cero)

Ejemplos:
partida_dardos( [1, 5, 11] )    =>  15
partida_dardos( [15, 20, 30] )  =>  0
partida_dardos( [1, 2, 3, 4] )  =>  140
partida_dardos([]) => 0

** IMPORTANTE: Antes de escribir su código, cree un branch con su nombre o el de su equipo. Luego deberá subir al repositorio su resolución!
*/

partida_dardos( [15, 20, 30] )

function partida_dardos(partida) {
    
    console.log(calcula(partida));
    

}


function calcula(partida) {
    var total=0;
    mayor5=0;

    if (partida.length>0) {
        
        partida.forEach(item =>  {
        
            // 0 puntos - si el radio está por arriba de 10.
            if (item >10) {
                total+=0;
            }

            // 5 puntos - si el radio está entre 5 y 10 ambos inclusive.
            if (item >= 5 && item <= 10) {
                total+=5;
            }

            // 10 puntos - si el radio es menor estricto que 5.
            if (item < 5) {
                total+=10;
                mayor5++;
            }

        });

        if (mayor5 == partida.length) {
            total+=100;
        }
    }
    
    return total;
    
}
