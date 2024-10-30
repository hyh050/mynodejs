let personInfo = {
    name: 'lee',
    age: 55,
    address: '서울 금천구 독산동 123',
    hobby: ['독서','등산','낚시','넷플릭스']
}

// for(let key in personInfo) {
//     console.log(`${key} => ${personInfo[key]}`)
// }
// console.log('--------')
// console.log(` key list : 
//     ${Object.keys(personInfo)}`);

// console.log(` key list type : 
//     ${typeof(Object.keys(personInfo))}`); // list


// console.log(personInfo['test']['a']);
// Object.keys(personInfo).forEach(key=>{
//     console.log(`${key} => ${personInfo[key]}`)
// });


// const keys = Object.keys(personInfo)
// console.log(keys.includes('test'));

// 1. 
// console.log(personInfo['test']['a']); // error 
// 2.
// if(keys.includes('test')) { // keys list, includes 
//     console.log(personInfo['test']['a']); // not error
// }

// console.log(typeof(keys)); // object --> array


personInfo = { // 받은 데이터 외부로 부터 
    name: 'lee',
    test: {
        b: {
            bb: 'aa-test'
        }
    },
    age: 15
}

if(Object.keys(personInfo).includes('test')){
    console.log(personInfo['test']['a']);
}