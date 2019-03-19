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


console.log(tiempoEspera([5,3,4], 1)) //--> deberá devolver 12 ya que como sólo hay una caja se suman la cantidad de minutos consumidos por cliente.
console.log(tiempoEspera([10,2,3,3], 2)) //--> deberá devolver 10 ya que hay 2 cajas. Los clientes 2do, 3ero y 4to finalizan antes que el 1ero.
console.log(tiempoEspera([2,3,10], 2)) //--> deberá devolver 12


function tiempoEspera(cli, ncajas) 
{
    var tiempo = 0;
    var cajas = [];

    for (let i = 0; i < ncajas; i++) {
        cajas.push(0);        
    }

    cli=cli.reverse();
    while (cli.length>0  || cajas.some(r=>r>0)) {
        
        // cajas.forEach(caja => {
        //     if (caja===0) {
        //         caja = cli.pop()
        //     }
        //     else{
        //         caja--;
        //     }
        // });

        for (let i = 0; i < cajas.length; i++) {
            if (cajas[i]===0) {
                cajas[i] = cli.pop()
                cajas[i]--;
            }
            else{
                cajas[i]--;
            }
            
        }

        tiempo++;
        

    }


    return tiempo;



    // var res = 0;
    // var cajaActiva = 1;
    // if(ncajas < 2){
    //     arr_tiempos.forEach(item => {
    //         res+=item;
    //     });
       
    // }
    // else{
    //     for(i=0;i<arr_tiempos.length;i++){
    //         if(arr_tiempos[i] <= arr_tiempos[i+1]){
    //             cajaActiva +=1
    //             res+=arr_tiempos[i];
               
    //         }else{
    //             console.log(arr_tiempos[i])
               
    //         }
    //     }
       
    // }
    // return res;
    /*
    var time= 0;

    var caja;


    for (let i = 0; i < array.length; i++) {
        const element = array[index];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
        
    }
    */
}