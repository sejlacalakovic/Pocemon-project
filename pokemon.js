window.onload = async function () {
    let pokemonResource = {}
    let pokemonArr = [];
    const pokemonInfo = [];

    const getPokeList = async () => {
        try {
            const r = await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10");
            const res = await r.json();
            pokemonResource = res;
        } catch (error) {
            console.log(error);
        }
    };



    const getPokemon = async (URL) => {

        try {
            const p = await fetch(URL)
            const pokemon = await p.json();
            pokemonInfo.push(pokemon)
        } catch (error) {
            console.log(error);
        }
    };
    await getPokeList();

pokemonArr = pokemonResource.results.map((p)=>{
return getPokemon(p.url)
})

    await Promise.all(pokemonArr).then(() =>
    console.log(pokemonInfo))

}


const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};


let url = "https://pokeapi.co/api/v2/pokemon/";
let card = document.getElementById("card");
let btn = document.getElementById("btn");
let visina = document.getElementById("heightOdg");
let tezina = document.getElementById("weightOdg");
let exp = document.getElementById("expOdg");
let pokemonName = document.getElementById("name");
let type = document.getElementById("type");
let img = document.getElementById("img")
let imgCont = document.getElementById("image-container")
let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');
let prevUrl = null;
let nextUrl = null;
let linksDiv = document.getElementById('links')



btn.style.padding = "10px"

let getPokemons = () => {
	id = Math.floor(Math.random() * 100) + 1
	finalUrl = url + id;

	fetch(finalUrl)
		.then((res) => res.json())
		.then((data) => getCard(data))
}
let color
let getCard = (data) => {
	visina.innerHTML = data.height
	tezina.innerHTML = data.weight
	exp.innerHTML = data.height
	pokemonName.innerHTML = data.name[0].toUpperCase() + data.name.slice(1)
	type.innerHTML = data.types[0].type.name
	img.src = data.sprites.front_default
	let themeColor = colors[data.types[0].type.name];
	imgCont.style.background = themeColor;
	type.style.background = themeColor;
	
}

function linksFunk (value) {
	let listItem = document.createElement('div')
    listItem.style.width = "100px";
    listItem.style.height = "50px";
    listItem.style.backgroundColor = "darkseagreen";
    listItem.style.display = "inline-block"
    listItem.style.flexWrap = "wrap"
    listItem.style.margin = "10px"
    listItem.style.padding = "10px"
    listItem.style.borderRadius = "4px"
    listItem.style.verticalAlign = "middle"
    listItem.style.justifyContent = "space-around"
	listItem.innerHTML = value;
	return listItem;
}

async function fetcher() {
	rez = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
	rez = await rez.json()
	for (let i = 0; i< rez.results.length; i++) {
		        linksDiv.appendChild(linksFunk(rez.results[i].name))
		    }
console.log(rez);
}
fetcher()




btn.addEventListener("click", getPokemons);
window.addEventListener("load", getPokemons)