const fetchData = () => {
    return new Promise((resolve, reject) => {
        // fetch from remote if success true, else false
        setTimeout(()=>{
            const success = false;
            const data = {
                name: 'lee', age:15
            }
            const error = {
                message: 'error 505'
            }
            if(success){
                resolve(data);
            }else{
                reject(error);
            }
        }, 2000);
    });
}

const result = fetchData();
result.then((data) => { // resolve
    console.log('resolve', data);
}).catch((error)=> { // reject 
    console.log('reject', error);
})