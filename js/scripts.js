/* Wraps the pokemonList array in IIFE. Adds a new variable to hold what IIFE will retun and assign the IIFE to that variable */
let pokemonRepository = (function() {
	/* Adds an array of 4 Pokemons (objects), which contains a list of Pokemons */
	let pokemonList = [];
	/* Loads the list of 10 Pokemons from an external link */
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

	/* This function adds new single item to the pokemonList array */
	function add(pokemon) {
		if (
			typeof pokemon === 'object' && 
			'name' in pokemon
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
		/* Adds an event listener to the button that calls showDetails function with pokemon parameter */
		button.addEventListener('click', function() {
			showDetails(pokemon)
		});
		/* Appends the button and the list to their parents */
		listPokemon.appendChild(button);
		pokemonList.appendChild(listPokemon);
	};

	/* Fetches data from the API, then add each Pokémon in the fetched data to pokemonList */
	function loadList(item) {
		return fetch(apiUrl).then(function(response) {
			return response.json();
			}).then(function(json){
				json.results.forEach(function(item) {
					let pokemon = {
						name: item.name,
						detailsUrl: item.url
					};
					add(pokemon);
					// Shows in console all the Pokemon items which were loaded by add function
					console.log(pokemon);
				});
			}).catch(function(e) {
				console.error(e);
				});
	};

	/* Loads for each Pokemon (item) the detailed data using the detailsUrl property */
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function(details) {
			// adds the details to the item
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = details.types;
		}).catch(function(e) {
			console.error(e);
			});
	};

	/* Runs a console.log on the Pokemon objects to show details */
	function showDetails(item) {
		/* Executes loadDetails function (that gets the Pokemon’s details from the server) in showDetails function (that is executed when a user clicks on a Pokemon button) */
		pokemonRepository.loadDetails(item).then(function() {
			console.log(item);
		});
	};

	/* Defines the keywords for the function that are used for execution outside of IIFE */
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

/* Fetches each Pokemon from the API using forEach loop */
pokemonRepository.loadList().then(function() { 
	/* Using forEach function instead of using the for loop to iterate over the Pokemons in pokemonList array in order to print the details of each one*/
	/* Chains the forEach function at getALL (IIFE) function */
	/* Use the addListItem function inside your forEach() loop to create a button for each Pokémon in the array */
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});

/* Selects the modal-container if the class is visible */
function showModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');
}