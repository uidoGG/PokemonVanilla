import pokemons from "./data.js";

let pokemonList = document.getElementById("list-pokemons");

pokemons.forEach((pokemon) => {
    let urlSplit = pokemon["url"].split("/");
    let pokemonNumber = urlSplit[urlSplit.length - 2];
    let fragment = document.createDocumentFragment();
    let article = document.createElement("article");
    article.className = "list-pokemons-item";
    let img = document.createElement("img");
    img.src = pokemon["sprite"];
    img.alt = `pokemon-${pokemonNumber}`;
    let div = document.createElement("div");
    div.className = "list-pokemons-item-content";
    let h3 = document.createElement("h3");
    h3.innerHTML = pokemon["name"];
    h3.className = pokemon["type"];
    let span = document.createElement("span");
    span.innerHTML = pokemon["type"];
    span.className = pokemon["type"];
    h3.appendChild(span);
    div.appendChild(img);
    div.appendChild(h3);
    article.appendChild(div);
    fragment.appendChild(article);
    pokemonList.appendChild(fragment);
})
