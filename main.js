// exercise 1

var myObj = { class: [] };
var className = 'animating';

function animateLeft(obj) {
	var classNameLeft = 'left';
    obj.class.push(className);
    obj.class.push(classNameLeft);
}
// have to move the variable to the top of the local scope.
// add a new variable for left because 'animating' was given the var first so to include left
// it was necessary to add a new variable for 'left'.
animateLeft(myObj);
console.log(myObj);

// exercise 2

function formatTemp(temp, celcius) {
	var unit = 'F';

    if (celcius) {
        unit = 'C';
    }
    	
    return temp + '&deg;' + unit;
}

var temp = formatTemp(99);
var ctemp = formatTemp(104, true);
console.log(temp);
console.log(ctemp);
// move unit 'F' inside the local 
// and create a temp variable for celcius in the global

// Exercise 3

var update = false;
var a = 0;

function increment() {
    if (update === false) {
        // return;
    }
// since the variable update is defined above we do not need to have a function named update.
// So I changed the function name to date.
    function date() {
        a++;

        if (a >= 10) {
            update = false;
        }
    }

    date();
}

for (var i = 0; i < 50; i++) {
    increment();
}


console.log(a);

// Exercise 4

function outer() {
    
    function inner() { 
        return 'Hello'; 
    }
    return inner();
}

console.log(outer());
// it will work with return inner directly after outer BUT
// it is easier to read the with return inner after the inner function.
// Exercise 5

var logTime = function logTime () {
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
}
logTime();

// because the variable wasn't defined until after the function so logTime hade to be moved below.