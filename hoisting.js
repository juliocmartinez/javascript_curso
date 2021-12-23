// Hoisting: Cuando las variables y las funciones se ejecutan
// antes del codigo
var miNombre = undefined;

console.log(miNombre+" Soy ese hoisting");

miNombre = "Julio Cesar";

/**
 * Js inicializa la variable con valor 
 * undefined
 */

/*Funciones*/

hey();

function hey(){
    console.log("Hola "+miNombre);
}


