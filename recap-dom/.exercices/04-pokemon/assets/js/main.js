/*
    Exercice 04 

    Réaliser une application permettant à un utilisateur de rechercher les informations d'un pokémon. 

    Pour cela, il aura à sa disposition deux <select>: 
      * Le premier select servira à sélectionner la région. De base, il est vide, mais via le code Javascript il sera peuplé d'options permettant de choisir la région voulue. Une fois l'option choisie, on ira peupler le seconde select avec les pokémons disponibles dans cette région
    * Un autre select peremettant de choisir un pokémon parmi une liste peuplée en fonction de sa région d'origine (Kanto, Aloha, Jotho, etc...). Lors de la sélection d'un pokémon dans ce select, on ira rechercher les informations du pokémon pour les afficher dans un élément HTML prévu pour
    

    Une fois les deux requêtes faites, l'utilisateur se verra ainsi présenté dans la div prévue le nom, le noméro dans le pokédex, les types, les noms de capacités, le poids et la taille de ce pokémon. Il y aura également l'image du pokémon, qui est présente en tant qu'URL dans le retour JSON des informations d'un pokémon
*/

const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/";
let pokedexAndURLs = [];
let pokemonsAndURLs = [];

// DONNE-MOI TOUS LES POKEDEX
const fetchAllPokedex = async () => {
  const url = BASE_POKEMON_API_URL + "pokedex";
  try {
    const response = await fetch(url);
    if (response.status !== 200) return;
    const data = await response.json();
    // console.log(data.results);
    pokedexAndURLs = data.results;
  } catch (error) {
    console.error(error);
  }
};

// DONNE-MOI TOUS LES POKEMONS ET CES URLs POUR CE POKEDEX
const fetchAllPokemonNamesAndURLsforPokedex = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) return;
    const data = await response.json();
    // console.log(data.pokemon_entries);
    // const result = data.pokemon_entries.map((obj) => obj.pokemon_species);
    // console.log(result);

    pokemonsAndURLs = data.pokemon_entries.map((obj) => ({
      name: obj.pokemon_species.name,
      url: obj.pokemon_species.url.replace("pokemon-species", "pokemon"),
    }));
    // console.log(pokemonsAndURLs);
  } catch (error) {
    console.error(error);
  }
};

// DONNE-MOI TOUTES LES INFOS QU'IL ME FAUT DE CE POKEMON POUR CES POKEMONS
const fetchAllPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) return;
    const data = await response.json();
    // console.log(data);

    // const reteurnObj = {
    //   id: data.id,
    //   name: data.name,
    //   height: data.height,
    //   weight: data.weight,
    //   // types: data.types,
    //   types: data.types.map((objTypes) => objTypes.type.name),
    //   abilities: data.abilities.map((objAbilities) => objAbilities.ability.name),
    //   sprites: data.sprites.front_default
    // };
    // console.log(reteurnObj);

    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((objTypes) => objTypes.type.name),
      abilities: data.abilities.map(
        (objAbilities) => objAbilities.ability.name
      ),
      // sprites: data.sprites.front_default,
    };
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const regionSelect = document.querySelector("select#region");
  const pokemonSelect = document.querySelector("select#pokemon-name");
  const pokemonDetailsDiv = document.querySelector("div#pokemon-details");

  await fetchAllPokedex();
  // console.log(pokedexAndURLs);

  regionSelect.innerHTML = `<option value="">Select a Region...</option>`;
  pokedexAndURLs.forEach((info) => {
    // console.log(info.name);
    const newOption = document.createElement("option");
    newOption.value = info.name;

    let futurTextContent = info.name.split("-");
    if (
      futurTextContent.includes("extended") ||
      futurTextContent.includes("updated") ||
      futurTextContent.includes("original")
    ) {
      futurTextContent = futurTextContent.toReversed();
    }
    futurTextContent[0] =
      futurTextContent[0].substring(0, 1).toUpperCase() +
      futurTextContent[0].substring(1);

    if (futurTextContent.length > 1) {
      futurTextContent = futurTextContent.join(" (") + ")";
    } else futurTextContent = futurTextContent[0];

    // console.log(futurTextContent);
    newOption.textContent = futurTextContent;
    regionSelect.appendChild(newOption);
  });

  regionSelect.addEventListener("change", async () => {
    // console.log(regionSelect.value);
    // const value = regionSelect.value;
    const { value } = regionSelect;
    if (!value) return;

    const foundPokedex = pokedexAndURLs.find((pok) => pok.name === value);
    if (!foundPokedex) return;
    // console.log(foundPokedex);
    await fetchAllPokemonNamesAndURLsforPokedex(foundPokedex.url);

    pokemonSelect.innerHTML = `<option value="">Select a Pokemon...</option>`;
    pokemonsAndURLs.forEach((pokemon) => {
      const newOption = document.createElement("option");
      newOption.value = pokemon.name;
      newOption.textContent =
        pokemon.name.substring(0, 1).toUpperCase() +
        pokemon.name.substring(1).toLowerCase();
      pokemonSelect.appendChild(newOption);
    });
  });

  pokemonSelect.addEventListener("click", async () => {
    const { value } = pokemonSelect;
    if (!value) return;
    const foundPokemon = pokemonsAndURLs.find((pok) => pok.name === value);
    if (!foundPokemon) return;
    // console.log(foundPokemon);

    const pokemonDetails = await fetchAllPokemonDetails(foundPokemon.url);
    pokemonDetailsDiv.innerHTML = `
      <h3>${pokemonDetails.id} - ${
        pokemonDetails.name.substring(0, 1).toUpperCase() + pokemonDetails.name.substring(1).toLowerCase()
      }</h3>
      <ul>
        <li><b>Heignt: </b>${pokemonDetails.height}</li>
        <li><b>Weight: </b>${pokemonDetails.weight}</li>
        <li><b>Types: </b>${pokemonDetails.types
          .map(
            (t) =>
              t.substring(0, 1).toUpperCase() + t.substring(1).toLowerCase()
          )
          .join(", ")}</li>
        <li><b>Abilities: </b>${pokemonDetails.abilities
          .map(
            (a) =>
              a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()
          )
          .join(", ")}</li>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemonDetails.id
        }.png" alt="pokemon"/>
      </ul>
    `;
  });
});
