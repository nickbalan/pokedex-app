
//Creates an alert
alert('Hello world');

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

// Add two numbers together
let simpleAddition = 2 + 2;
document.write(simpleAddition + addSpace);

// Assing a value to variable favoriteFood
let favoriteFood = 'Sarmale';
document.write(favoriteFood + addSpace);

// Assign a value to an variable (myName)
let myName = 'Bob\n';
document.write(myName);

// Assing a new value to the same variable (myName)
myName = 'John Doe';
document.write(myName + addSpace);

// Multiply two numbers together
let size = 100;
let doubleSize = size * 2;
document.write(doubleSize + addSpace);

/* The result of doubling of the doubleSize variable and substracting half of the value of the original size variable*/
let minSize = (doubleSize * 2) - (size * 2);
document.write(minSize+addSpace);

/* Displays a text with quotes*/
let escapedtext1 = "This code displays \"quotes\"";
document.write(escapedtext1+addSpace);

/* Displays a text with backslash*/
let escapedtext2 = 'This code displays \\backslash\\ and "quotes"';
document.write(escapedtext2+addSpace);

/* Displays a template literal form */
let name = 'Nick';
let age = 31;
let message = `Hello!
This is my first message here.
My name is: ${name},
and I'm ${age}.`;
document.write(message+addSpace);

/* Adds object car */
let car = {
	color: 'red',
	mileage: 10
};

/* Adds object with another object nested inside it */
let annesAge = 27;
let anne = {
	name: 'Anne',
	age: annesAge,
	child: {
		name: 'Joe',
		age:2
	}
};

/* Adds Square Brackets with Objects */
let currentUserName = 'sam';
let userAges = {
	anne: 27,
	sam: 112,
	megan: 97
};

userAges[currentUserName] = 113;


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

/* Assigns the result of the getAll (IIFE) function to a global variable */
let pokemonListOut = pokemonRepository.getAll();

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a forEach function instead of using the for loop to iterate over the Pokemons in pokemonList array in order to print the details of each one*/
pokemonListOut.forEach(function(pokemon) {
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

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds my age with conditional if*/
let myAge = 31;
if (myAge === 30) {
	document.write('You are 30 years old!'+addSpace);
} else if (myAge === 31) {
	document.write('You are 31 years old!'+addSpace);
} else {
	document.write('You are neither 30 nor 31 years old.'+addSpace);
};

/* Adds a loop that prints every number from 0 to 31*/
for (let i = 0; i <= 31; i++) {
	document.write(i+add2Space);
};

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a loop that prints an array of ages minus 2 years for each age */
let ages = [20, 30, 21, 31, 35];
for (let i = 0; i < ages.length; i++) {
	document.write(ages[i] - 2 + addSpace)
};

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a loop that identifies and prints on DOM the maturity of people by ages (child, teenager, adult) */
let person = [
	{name: 'person1', age: 16},
	{name: 'person2', age: 10},
	{name: 'person3', age: 25}
];

for (let i = 0; i < person.length; i++) {
	if (person[i].age < 19 && person[i].age > 13) {
		document.write(person[i].name + ' is a teenager' + addSpace);
	} else if (person[i].age < 13) {
		document.write(person[i].name + ' is a child' + addSpace);
	} else {
		document.write(person[i].name + ' is an adult' + addSpace);
	}
};

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a function expression that sum numbers */
let add = function sum(x, y) {
	return x + y;
};

let result1 = add(100, 200);
document.write(result1);

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a anonymous function that subtract numbers */
let subtract = function (x, y) {
	return x - y;
};

let result2 = subtract(200, 100);
document.write(result2);

/* Adds some space between prints using function addsSpace */
addsSpace();

/* Adds a callback function that multiplies a parameter with the results (result2) of the last subtraction*/
function multiply(param) {
	return param * result2; 
};

document.write(multiply(add(101, 99)));


