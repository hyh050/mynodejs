function add1(x, y) { // 선언 함수
    console.log(`${x} ${y}`);
    const r = x + y;
    return r;
}
console.log(`add1 result => ${add1(11,22)}`);

const add2 = function(x, y) { // 익명 함수
    console.log(`add2 x : ${x}, y : ${y}`);
    const r = x + y;
    return r;
}
console.log(`add2 result => ${add2(11,22)}`);

const add3 = (x, y) => {
    console.log(`add3 x : ${x}, y: ${y}`)
    const r = x + y;
    return r;
}
console.log(`add3 result => ${add3(12,34)}`);
const add4 = (x, y) => x + y;
console.log(`add4 result => ${add4(12,34)}`);
