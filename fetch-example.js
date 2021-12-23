const divContainer = document.querySelector('.pokemon')
function miPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res)=>res.json())
    .then(data=>{
        mostrarPokemon(data)
    });
}

function mostrarPokemon(pokemon){

    const h1 = document.createElement('h1');
    h1.textContent=pokemon.name;

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const div = document.createElement('div');
    div.appendChild(h1);
    div.appendChild(img);
    divContainer.appendChild(div);

    

}

miPokemon("wartortle");
