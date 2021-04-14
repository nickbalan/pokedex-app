/* Wraps the pokemonList array in IIFE. Adds a new variable to hold what IIFE will retun and assign the IIFE to that variable */
let pokemonRepository = (function() {
	/* Sets the modalContainer variable as global, to avoid the creation of the variable over and over again */ 
	/* Has been deleted all the repetitions of this variable from all the code of this IIFE */
	let modalContainer = document.querySelector('#modal-container');
	/* Adds an array of 4 Pokemons (objects), which contains a list of Pokemons */
	let pokemonList = [];
	/* Loads the list of 10 Pokemons from an external link */
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

	/* This function adds new single item to the pokemonList array */
	function add(pokemon) {
			pokemonList.push(pokemon);
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

		detailsLister(button, pokemon);
	};

	/* Adds an event listener to the button that calls showDetails function with pokemon parameter */
	function detailsLister(button, pokemon) {
		button.addEventListener('click', function() {
			showDetails(pokemon)
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

	/* Loads for each Pokemon (item) the detailed data from the API */
	function loadDetails(pokemon) {
		let url = pokemon.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function(details) {
			// adds the details to the items
			pokemon.imageUrl = details.sprites.front_default;
			pokemon.height = details.height;
			pokemon.types = details.types;
		}).catch(function(e) {
			console.error(e);
			});
	};

	/* Runs a console.log on the Pokemon objects to show details */
	function showDetails(pokemon) {
		/* Executes loadDetails function (that gets the Pokemon’s details from the server) in showDetails function (that is executed when a user clicks on a Pokemon button) */
		loadDetails(pokemon).then(function() {
			showModal(pokemon);
		});
	};

	/* Merges the modal container and its functions into pokemonRepository IIFE */
	function showModal(pokemon) {
		/* Clears all existing modal content */
		modalContainer.innerText = '';
		
		/* Adds to modal container a div section and assigned a classes to it */
		let modal = document.createElement('div');
		modal.classList.add('modal');
		/* Selects the modal-container if the class is visible */
		modalContainer.classList.add('is-visible');
		
		/* Adds to modal container a close button and assigned a class to it */
		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		/* Adds an inner text to the close button */
	    closeButtonElement.innerText = 'Close';
	    /* Adds an event listener to the close button, which activates the hideModal function */
		closeButtonElement.addEventListener('click', hideModal);
	    
	    /* Adds the name of Pokemon */
	    let namePokemon = document.createElement('h1');
	    namePokemon.innerText = pokemon.name;
	    /* Adds the height of Pokemon */
	    let heightPokemon = document.createElement('p');
	    heightPokemon.innerText = `Height: ${pokemon.height}`;
	    /* Adds the image of Pokemon */
	    let imgPokemon = document.createElement('img');
	    imgPokemon.src = pokemon.imageUrl;

	    /* Adds an event listener to the close button, which activates the hideModal function */
		closeButtonElement.addEventListener('click', hideModal);
		/* Appends the elements to the modal */
		modal.appendChild(closeButtonElement);
		modal.appendChild(namePokemon);
		modal.appendChild(heightPokemon);
		modal.appendChild(imgPokemon);
		modalContainer.appendChild(modal);
		
	};

	/* Saves the reject function of the promise in the dialogPromiseReject variable */
	let dialogPromiseReject; // Can be set later, by showDialog
	/* Sets the button to close */
  	function hideModal() {
    	let modalContainer = document.querySelector('#modal-container');
    	modalContainer.classList.remove('is-visible');
		/* Rejects always the dialog when the modal is closed */
		if (dialogPromiseReject) {
		    dialogPromiseReject();
		    dialogPromiseReject = null;
    	}
  	};

	/* Sets the button to close if the Escape key is pressed */
	window.addEventListener('keydown', (e) => {
		let modalContainer = document.querySelector('#modal-container');
	    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
	      hideModal();  
	    }
	});

	/* Sets the button to close if user clicks directly on the overlay, outside the modal container */
	modalContainer.addEventListener('click', (e) => {
	    // Since this is also triggered when clicking INSIDE the modal
	    // We only want to close if the user clicks directly on the overlay
	    let target = e.target;
	    if (target === modalContainer) {
	      hideModal();
	    }
	  });

	/* Defines the keywords for the function that are used for execution outside of IIFE */
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
		hideModal: hideModal,
		showModal: showModal
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