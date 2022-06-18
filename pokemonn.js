const fetchPokemon = () => {
      const url = "https://pokeapi.co/api/v2/pokemon/${id}";
      const info = fetch(url).then((res) => res.json());
    
      const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map((type) => type.type.name).join(", "),
      }));
      displayPokemon(pokemon);
    };
    
    const displayPokemon = (pokemon) => {
      console.log(pokemon);
    };
    fetchPokemon();
    window.onload = async () => {
      pokemonResource = [];
      pokemonInfo = [];
      pokemonArr = [];
    
      const getPokemonList = async () => {
        try {
          const url = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10"
          );
    
          const res = await url.json();
          pokemonResource = res;
          console.log(pokemonResource);
        } catch (error) {
          console.log(error);
        }
      };
    
      const getPokemon = async (URL) => {
        try {
          const poki = await fetch(URL);
          const pokemon = poki.json();
          pokemonInfo.push(pokemon);
        } catch (error) {
          console.log(error);
        }
      };
    
      await getPokemonList();
      pokemonArray = pokemonResource.results.map((r) => {
        return getPokemon(r.url);
      });
      await Promise.all(pokemonArr);
      console.log(pokemonInfo);
    };
    




    // const pokedex = document.getElementById("pokedex");
    // const promises = [];
    // const fetchPokemon = () => {
    //   for (let i = 0; i <= 50; i++) {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
    //     promises.push(fetch(url).then((res) => res.json()));
    //   }
    // };
    // Promise.all(promises).then((results) => {
    //   const pokemon = results.map((r) => ({
    //     name: r.name,
    //     id: r.id,
    //     image: r.stripes["front_default"],
    //     type: r.types.map((t) => t.type.name).join(", "),
    //   }));
    // });
    // fetchPokemon();
    
    // const displayPokemon = (pokemon) => {
    //   console.log(poekmon);
    //   const htmlElement = pokemon
    //     .map(
    //       (pokemon) => `
    // <li class="card">
    //     <img class="card-image" src="${pokemon.image}"/>
    //     <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    //     <p class="card-subtitle">Type: ${pokemon.type}</p>
    // </li>
    // `
    //     )
    
    //     .join(", ");
    //   pokedex.innerHTML = htmlElement;
    // };
    // fetchPokemon();
    // displayPokemon();