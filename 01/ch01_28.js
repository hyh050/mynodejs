let data;

// from remote mock 
const fetchData = (cb) => {  // cb : handleData
    setTimeout(()=>{
        data = {
            name: 'lee',
            age: 15,            
        };
        cb(data);
    }, 2000);
}

const handleData = (data) => { // callback function
    console.log(`from callback : ${JSON.stringify(data)}`);
}

fetchData(handleData);