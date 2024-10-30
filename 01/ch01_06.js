console.log(String(52));
console.log(typeof(String(52))); // string
console.log(typeof(52+"")); // string
console.log(typeof(`${52}`)); // string 

console.log(typeof(Number("45"))); // number
console.log(typeof(parseInt("45"))); // number
console.log(typeof(parseFloat("45.23"))); // number

console.log(isNaN(Number("Hello"))); // true
