let personInfo = {
    name: 'lee',
    age: 55,
    address: '서울 금천구 독산동 123',
    hobby: ['독서','등산','낚시','넷플릭스'],
    addAge: function() {
        this.age = this.age + 1;
    }
}
console.log(`before call addAge : 
    ${personInfo.age}`); // 55 
personInfo.addAge();
console.log(`after call addAge : 
    ${personInfo.age}`); // 56
