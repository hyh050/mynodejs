let test;
console.log(typeof(test)); // undefined 
test = typeof(test) != 'undefined' ? test: 'initial';
console.log(test); // initial 