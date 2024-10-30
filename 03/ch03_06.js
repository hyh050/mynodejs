const { exec } = require('child_process');
const cp = require('child_process');

const cmd = `ls -la`;  // window : dir
cp.exec(cmd, { encoding: 'utf8' }, (err, stdout, stderr)=> {
    if(err){
        console.error(`error 발생 : ${err}`);
        return;
    }
    console.log(stdout);
});
