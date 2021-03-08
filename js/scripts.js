
//Creates an alert
alert('Hello world');

// Add some space between the variables
let addSpace = '<br>';

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