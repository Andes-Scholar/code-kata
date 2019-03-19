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


function main(cola, cantCajas){
var cantCajasLibres = cantCajas;

var clientesEnCaja = [];
var iterador =0;
for (var index in cola){
    clientesEnCaja[index]=0;
}
var acumulador = 0;
while(SeAtendieronTodos(cola)>0){
   // while(iterador < 5){  
        iterador++;
      
    if(cantCajasLibres>0){
        for(var index in clientesEnCaja){
            if(cola[index]>0 && clientesEnCaja[index]==0 && cantCajasLibres >0){
                clientesEnCaja[index]=1;
                cantCajasLibres-=1;
            }
        }
    }
    
    for(var index in cola){
        if(clientesEnCaja[index]==1){
            if(cola[index]==0){
                cantCajasLibres+=1;
                clientesEnCaja[index] =0;
                for(var index in clientesEnCaja){
                    if(cola[index]>0 && clientesEnCaja[index]==0 && cantCajasLibres >0){
                        clientesEnCaja[index]=1;
                        cantCajasLibres-=1;
                    }
                }
            }
            else{
                cola[index]-=1;
            }           
        }
    }

 acumulador +=1;
}
return acumulador;
}

function SeAtendieronTodos(cola){
    var resultado=0;
    for(index in cola){
        resultado += cola[index];
    }
    return resultado;
}
 console.log( main([5,3,4], 1));
console.log( main([10,2,3,3], 2));
 console.log( main([2,3,10], 2));
