let arrayPokemon = [];
let filteredPokemon;

window.onload = function() {
    pokeSearch();
    crear();
}

const crear = () => {
    const text = document.createTextNode("hola");
    const p = document.createElement("P");
    p.appendChild(text);
    document.getElementById("container").appendChild(p);
}

const pokeSearch = () => {
    const searchBar = document.getElementById("poke-search");
    
    searchBar.addEventListener('input', (event) => {
        console.log(event.target.value);

        if(arrayPokemon.length === 0){
            apiPokemonRequest();
        }

        pokeFilter();
        pokePrint(filteredPokemon);
    });
}

const apiPokemonRequest = () => {
    const oReq = new XMLHttpRequest();

    oReq.open("get",'https://pokeapi.co/api/v2/pokemon?limit=151');
    oReq.send();    
    oReq.addEventListener('load', (event) => {
        const response = event.currentTarget.response;
        const parsedResponse = JSON.parse(response);
        console.log(parsedResponse.results);
        arrayPokemon = parsedResponse.results;
    });

    return '';
};

const pokeFilter = () => {
    filteredPokemon = arrayPokemon.filter(pokemon => {
        return pokemon.name.includes(event.target.value);
    });
};

const pokePrint = (pokemones) => {
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.id = "resultados";
    let text;

    
     do {
        for (let i = 0; i < pokemones.length; i++) {
            let parrafo = document.createElement("p");
            text = document.createTextNode(pokemones[i].name);
            parrafo.appendChild(text);
            div.appendChild(parrafo);   
        }
        //container.appendChild(div); 
    } while (container.childNodes.length < 2);
}

