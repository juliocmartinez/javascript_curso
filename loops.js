/** Opcion 1
 * Inicializando una variable
 */
var estudiantes= ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante,index){
    console.log(`Hola, ${estudiante}`,`${index}`);

}
/*for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i],i)

}*/

/**Opcion 2 
 * inicializando una variable en singular
*/

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
