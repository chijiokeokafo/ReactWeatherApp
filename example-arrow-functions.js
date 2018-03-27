var names = ['Allan', 'Julie', 'Chijioke', 'Jen'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('chijioke'));

// var person = {
// 	name: 'Chijioke',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// };

// person.greet();

//Challenge Area

function add (a, b) {
	return a + b;
}

// console.log(add(1, 3));
// console.log(add(1, 3));


var addStatement = (a, b) => {
	return a + b;
}

console.log(addStatement(1, 3));

var addExpression = (w, p) => w + p;

console.log(addExpression(1, 3));