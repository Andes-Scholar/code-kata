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
var tirada1 = [1, 5, 11];
var tirada2 = [15, 20, 30];
var tirada3 = [1, 2, 3, 4];
var tirada4 = [];
var tirada5 = 'arreglo';
var tirada6 = 343;

function main(tirada){
    var resultado=0;
    var bandera=false;
    if(Array.isArray(tirada)){    
        if(tirada.length==0){        
            return 0;        
        }
        else{
            for(var index in tirada){
                if(tirada[index]>5){
                    bandera=true;
                }
                if(tirada[index]>=5 && tirada[index]<=10){
                    resultado+=5;                
                }
                else if(tirada[index]<5){
                    resultado+=10;
                }
            }
            if(!bandera){
                resultado+=100;
            }
        }    
    }
    return resultado;
}

console.log(main(tirada1));
console.log(main(tirada2));
console.log(main(tirada3));
console.log(main(tirada4));
console.log(main(tirada5));
console.log(main(tirada6));

