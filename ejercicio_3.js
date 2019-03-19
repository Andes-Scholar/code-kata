/*
Descripción del ejercicio:

El objetivo del juego consiste en desarrollar un pequeño programa que dada una cola de clientes en un supermercado y una x cantidad de cajas de atención
nos devuelva la cantidad de tiempo en la que todos los clientes fueron atendidos.

El programa recibirá 2 parámetros:

Clientes: Es un array de número positivos representando la cola. Cada número entero es un cliente y el valor numérico representa el tiempo requerido para su atención.
n: Es un número positivo que representa la cantidad de cajas de atención.

El programa deberá retornar un número entero con la cantidad de tiempo requerido.

precondiciones:

1) Sólo existe 1 única cola y el orden nunca cambia.
2) La primer persona de la cola, procede a ser atendido en la caja ni bien ésta es liberada.

Ejemplos: Suponiendo que la función se llama tiempoEspera

tiempoEspera([5,3,4], 1) --> deberá devolver 12 ya que como sólo hay una caja se suman la cantidad de minutos consumidos por cliente.
tiempoEspera([10,2,3,3], 2) --> deberá devolver 10 ya que hay 2 cajas. Los clientes 2do, 3ero y 4to finalizan antes que el 1ero.
tiempoEspera([2,3,10], 2) --> deberá devolver 12

Utilice estos ejemplos como resultados válidos para testear su aplicación.

** IMPORTANTE: Antes de escribir su código, cree un branch con su nombre o el de su equipo. Luego deberá subir al repositorio su resolución!

*/

/* primero asignar  cada valor inicial a cada caja

    SI LA CAJA ES MAYOR O IGUAL AL ARREGLO SE DEVUELVE EL MAYOR VALOR DEL ARREGLO

    SINO

    RUTINA

*/


function tiempoEspera(arreglo, caja){
    var tiempo = 0;
    var tiempoCaja = [caja-1];
    if (caja >= arreglo.length) {
        //Suma de todos los valores 
    }
    var cajaActual = 0;
    var cajaMin = 0;
    var cajaMax = 0;
    var tiempoMax = arreglo[0];
    var tiempoMin = arreglo[0];
    for ( var indice = 0 ; indice < arreglo.length; indice ++) {
        tiempoCaja[cajaMin] = arreglo[indice];
        if (tiempoCaja[cajaMin] > tiempoMax) {
            tiempoMax = tiempoCaja[cajaMin];
            cajaMax = cajaMin;
        }
        if (tiempoCaja[cajaMin] < tiempoMin) {
            tiempoMin = tiempoCaja[cajaMin];
            cajaMin = cajaMin;
        }



        tiempoNuevo = tiempoCaja[cajaActual];
        // if (cajaActual < caja-1) {
        //     cajaActual ++;
        // } else {
        //     cajaActual = 0;
        // }
    }

    return "El tiempo maximo en caja es " + tiempo;
}

console.log(tiempoEspera([5,3,4], 1));
console.log(tiempoEspera([10,2,3,3], 2));
console.log(tiempoEspera([2,3,10,5,5,5,5,5], 3) );

