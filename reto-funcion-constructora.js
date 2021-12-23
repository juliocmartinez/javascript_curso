/**
 * Generar una funcion constructora y hacer 
 * un loops para dar una lista de 30 autos
 * que se vayan construyendo solos.
 */
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];

//var autoCorolla = new auto("Corolla", "Model 97", 1997);

for(var i=0; i<3;i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo= prompt("Ingresa el modelo del auto");
    var annio= prompt("Ingresa el año del auto")
    autos.push(new auto(marca, modelo, annio));
}

console.log(autos)
// var autoCorolla = new auto("Corolla", "Model 97", 1997);

