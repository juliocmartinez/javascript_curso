console.log("Carros Disponibles")

var carros = ["Mazda", "Renault", "Toyota", "Volkswagen", "Chevrolet"];

/*for (carro  of carros) {
    console.log(carro)
}*/

//console.log(carros);


var text = "";
const h1 = document.createElement('h1');
const div = document.createElement('div');
const containerCarro = document.querySelector('.save-container')
for (var i = 0; i < carros.length; i++) {
    text += (carros[i] + "</br>");
    function imgCarro(carrito) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${carrito}`)
            .then((res) => res.json())
            .then((data) => {
                crearCarro(data);

            });
    }

    function crearCarro(carrito) {
        h1.textContent = carrito.name;
        div.appendChild(h1);
        containerCarro.appendChild(div);
    }


    imgCarro(1);




}

document.getElementById('demo').innerHTML = text;




