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
			weight: 6.9
		},
		{
			name: 'Squirtle',
			height: 0.5,
			types: ['Water'],
			weight: 9.0
		},
		{
			name: 'Charmander',
			height: 0.6,
			types: ['Fire'],
			weight: 8.5
		},
		{
			name: 'Pidgeotto',
			height: 1.1,
			types: ['Normal', 'Flying'],
			weight: 29
		}
	];

	/* This function adds new single item to the pokemonList array */
	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	/* This function returns the pokemonList array */
	function getAll() {
		return pokemonList;
	}

	/* This defines the function using the function keyword */
	return {
		add: add,
		getAll: getAll
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
for (let i = 0; i < pokemonListOut.length; i++) {
	if (pokemonListOut[i].height < 0.6) {
		document.write(pokemonListOut[i].name + ' (height: ' + pokemonListOut[i].height + ')' + ' - This is a small Pokemon!' + addSpace);
	} else if (pokemonListOut[i].height < 5.0 && pokemonListOut[i].height > 1.0) {
		document.write(pokemonListOut[i].name + ' (height: ' + pokemonListOut[i].height + ')' + ' - Wow, this is a big Pokemon!' + addSpace);
	} else {
		document.write(pokemonListOut[i].name + ' (height: ' + pokemonListOut[i].height + ')' + ' - This is a medium-size Pokemon' + addSpace);
	}
};

/* Adds some space between prints using function adds2Space */
addsSpace();

