let personInfo = {
    name: 'lee',
    age: 55,
    address: '서울 금천구 독산동 123',
    hobby: ['독서','등산','낚시','넷플릭스']
}
const age = 'age';
console.log(personInfo);
console.log(personInfo['name']);
console.log(personInfo[age]) // 55 
console.log(personInfo.name);
console.log('-----------------')
personInfo['gender'] = 'M' // M Man
// 기존에 없는 키를 추가하는 경우는 insert 
console.log(personInfo);
personInfo['address'] = '서울 양천구 신정동'; 
// 기존 키에 값을 할당하면 update
console.log(personInfo);
