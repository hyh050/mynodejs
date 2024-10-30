function tentimes(cb) {
    for(let i=0;i<10;i++){
        cb(i);
    }
}
tentimes(function(i){
    console.log(`call this function[${i}]`);
});