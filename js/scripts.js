// Add some space between the variables
let addSpace = '<br>';
let add2Space = '<br><br>';

// Functions that add space between prints 
function addsSpace (){
	document.write('<br>');
};

function adds2Space (){
	document.write('<br><br>');
};

/* Wraps the pokemonList array in IIFE. Adds a new variable to hold what IIFE will retun and assign the IIFE to that variable */
let pokemonRepository = (function() {
	/* Adds an array of 4 Pokemons (objects), which contains a list of Pokemons */
	let pokemonList = [
		{
			name: 'Bulbasaur', 
			height: 0.7, 
			types: ['Grass', 'Poison'],
			weight: 6.9,
		},
		{
			name: 'Squirtle',
			height: 0.5,
			types: ['Water'],
			weight: 9.0,
		},
		{
			name: 'Charmander',
			height: 0.6,
			types: ['Fire'],
			weight: 8.5,
		},
		{
			name: 'Pidgeotto',
			height: 1.1,
			types: ['Normal', 'Flying'],
			weight: 29,
		}
	];

	/* This function adds new single item to the pokemonList array */
	function add(pokemon) {
		if (
			typeof pokemon === 'object' && 
			'name' in pokemon && 
			'height' in pokemon && 
			'types' in pokemon
		) {
			pokemonList.push(pokemon);
		} else {
			console.log('pokemon is not correct');
		};
	};

	/* This function returns the pokemonList array */
	function getAll() {
		return pokemonList;
	};

	/* Creates lists and buttons in the DOM with all objects from pokemonList array */
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listPokemon = document.createElement('li');
		let button = document.createElement('button');
		/* Adds the names of the objects from pokemonList array on the buttons */
		button.innerText = pokemon.name;
		button.classList.add('button-class');
		/* Appends the button and the list to their parents */
		listPokemon.appendChild(button);
		pokemonList.appendChild(listPokemon);
	};

	/* Runs a console.log on the Pokemon objects to show details */
	/* Adds an event listener to the button created in addListItem function */
	function showDetails(pokemon) {
		button.addEventListener('click', function (event) {
			let target = event.target;
			target.classList.toggle('button-class');
		});
		console.log(pokemon);
	};

	/* Defines the keywords for the function that are used for execution outside of IIFE */
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
	};
})();

/* Adds a new Pokemon (object) to the pokemonList array using the add (IIFE) function */
pokemonRepository.add({name: 'Pikachu', height: 2.6, types: ['Electric'], weight: 5.9})
console.log(pokemonRepository.getAll());

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Using forEach function instead of using the for loop to iterate over the Pokemons in pokemonList array in order to print the details of each one*/
/* Chains the forEach function at getALL (IIFE) function */
pokemonRepository.getAll().forEach(function(pokemon) {
	document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + ' (types: ' + pokemon.types + ')' + ' (weight: ' + pokemon.weight + ')' + addSpace);
});

/* Adds some space between prints using function adds2Space */
adds2Space();

/* Adds a for loop that identifies and prints on DOM what height category each Pokemon has */
/* Chains the for loop at getALL (IIFE) function */
for (let i = 0; i < pokemonRepository.getAll().length; i++) {
	if (pokemonRepository.getAll()[i].height < 0.6) {
		document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ')' + ' - This is a small Pokemon.' + addSpace);
	} else if (pokemonRepository.getAll()[i].height < 5.0 && pokemonRepository.getAll()[i].height > 2.0) {
		document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ')' + ' - Wow, this is a big Pokemon!' + addSpace);
	} else {
		document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ')' + ' - This is a medium-size Pokemon.' + addSpace);
	}
};

/* Adds some space between prints using function adds2Space */
addsSpace();

