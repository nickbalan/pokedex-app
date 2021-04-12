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

/* Sets showModal function for modalContainer with parameters title and text */
function showModal(title, text) {
	let modalContainer = document.querySelector('#modal-container');
	/* Clears all existing modal content */
	modalContainer.innerText = '';
	/* Adds to modal container a div section and assigned a class to it */
	let modal = document.createElement('div');
	modal.classList.add('modal');
	/* Adds to modal container a close button and assigned a class to it */
	let closeButtonElement = document.createElement('button');
	closeButtonElement.classList.add('modal-close');
	/* Adds an inner text to the close button */
    closeButtonElement.innerText = "Close";
    /* Adds an event listener to the close button, which activates the hideModal function */
	closeButtonElement.addEventListener('click', hideModal);
    /* Adds an title tag */
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    /* Adds a paragraph tag with some text */
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
	/* Appends the elements to the modal */
	modal.appendChild(closeButtonElement);
	modal.appendChild(titleElement);
	modal.appendChild(contentElement);
	modalContainer.appendChild(modal);
	/* Selects the modal-container if the class is visible */
	modalContainer.classList.add('is-visible');
};

/* Sets the button to close  */
function hideModal() {
	let modalContainer = document.querySelector('#modal-container');
	modalContainer.classList.remove('is-visible');
}

/* Adds an event listener to the showModal function, which will activate the button */
document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});