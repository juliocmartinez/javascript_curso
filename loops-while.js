var estudiantes= ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);

}

/**
 * Vamos validando la funcion y mostrando
 * los datos hasta que la longitud del arreglo
 * sea igual a cero.
 */
while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}