const fetchData = () => {
    return new Promise((resolve, reject) => {
        // fetch from remote if success true, else false
        setTimeout(()=>{
            const success = true;
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

async function getData() {
    try{
        const data = await fetchData();
        console.log(`fetchData result =>`, data);
    }catch(e){
        console.error(e);
    }
}

getData();
