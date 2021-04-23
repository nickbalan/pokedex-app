/* Wraps the pokemonList array in IIFE. Adds a new variable to hold what IIFE will retun and assign the IIFE to that variable */
let pokemonRepository = (function(){
	/* Adds an array of 4 Pokemons (objects), which contains a list of Pokemons */
	let pokemonList = [];

	/* Loads the list of 10 Pokemons from an external link */
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

	let searchBar = document.querySelector('#search-bar');

	/* This function adds new single item to the pokemonList array */
	function add(item) {
		if(
			typeof item === 'object' &&
			'name' in item &&
			'detailsUrl' in item
		) {
			pokemonList.push(item);
		} else {
			console.log('Pokemon is not correct');
		}
	};

	/* This function returns the pokemonList array */
	function getAll() {
		return pokemonList;
	};

	/* Creates lists and buttons in the DOM with all objects from pokemonList array */
	function addListItem(pokemon) {
		/* Selects elements with the list-group class */
		let pokemonList = document.querySelector('.list-group');
		/* Creates a li tag */
		let listPokemon = document.createElement('li');
		/* Adds classes for the li tag */
		listPokemon.classList.add('list-group-item');
		listPokemon.classList.add('list-group-item-action');

		/* Creates a button */
		let button = document.createElement('button');
		/* Adds the names from pokemonList array on the button */
		button.innerText = pokemon.name;
		/* Adds classes for the button tag */
		button.classList.add('btn');
		button.classList.add('btn-block');
		button.setAttribute('data-target', '#pokemonModal');
		button.setAttribute('data-toggle', 'modal');

		/* Appends the button and the list to their parents */
		listPokemon.appendChild(button);
		pokemonList.appendChild(listPokemon);
		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		});
	};

	/* Fetches data from the API, then add each Pokémon in the fetched data to pokemonList */
	function loadList() {
		return fetch(apiUrl).then(function(response) {
			return response.json();
		}).then(function(json){
			json.results.forEach(function(item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url,
				};

				add(pokemon);
				// Shows in console all the Pokemon items which were loaded by add function
				console.log(pokemon);
				});
			}).catch(function(e) {
				console.error(e);
				});
	};

	/* Loads for each Pokemon (item) the detailed data from the API */
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function(details) {
			// adds the details to the items
			item.imageFront = details.sprites.front_default;
			item.imageBack = details.sprites.back_default;
			item.height = details.height;
			item.weight = details.weight;
			item.types = details.types;
		}).catch(function(e) {
			console.error(e);
			});
	};

	/* Runs a console.log on the Pokemon objects to show details */
	function showDetails(pokemon) {
		/* Executes loadDetails function (that gets the Pokemon’s details from the server) in showDetails function (that is executed when a user clicks on a Pokemon button) */
		loadDetails(pokemon).then(function() {
			/* Seletes the classes, assigns it to a variable */
			let modalBody = $('.modal-body');
			let modalTitle = $('.modal-title');
			let modalHeader = $('.modal-header');

			/* Empty the modalTitle and modalBody to avoid overlapping and adding content. */
			modalTitle.empty();
			modalBody.empty();

			/* Selects details about Pokemon that will be displayed in Modal. */
			let pokemonName = $('<h1>' + pokemon.name + '</h1>');
			let pokemonImageFront = $('<img class="modal-img" style="width:25%">');
			pokemonImageFront.attr('src', pokemon.imageFront);
			let pokemonImageBack = $('<img class="modal-img" style="width:25%">');
			pokemonImageBack.attr('src', pokemon.imageBack);
			let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height + '</p>');
			let pokemonWeight = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
			let pokemonTypes = document.createElement('span');
			let types = 'Types: ';
      		pokemon.types.forEach(function(item) {
        		types += item.type.name + ' ';
      		});
      		pokemonTypes.innerText = types;
			
			/* Appends to their parents */
			modalTitle.append(pokemonName);
    		modalBody.append(pokemonImageFront);
    		modalBody.append(pokemonImageBack);
    		modalBody.append(pokemonHeight);
    		modalBody.append(pokemonWeight);
    		modalBody.append(pokemonTypes);
		});
	};

	/* Adds the search by name functionality for the Search Bar. */
	searchBar.addEventListener('input', function(){
		let pokemonList = document.querySelectorAll('.list-group-item');
		let filterUpperCase = searchBar.value.toUpperCase();

		pokemonList.forEach(function(pokemon){
			if(pokemon.innerText.toUpperCase().indexOf(filterUpperCase) > -1){
				pokemon.style.display = '';
			} else {
				pokemon.style.display = 'none';
			}
		});
	});
	
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