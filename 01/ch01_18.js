let arr = [1,2,3,4,5,6,7,8,9,10];

const arr2 = arr.map((x)=>x*2);
const arr22 = arr.map(function(x){ // 1, 2 .. 10
    return x*2; // 1*2 , 2 *2 ... 20
});
console.log(arr2);
console.log(arr22);