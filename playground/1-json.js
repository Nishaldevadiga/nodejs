const fs=require('fs');
const path = require('path');


const filePath = path.join(__dirname, '1-json.json');
const databuffer=fs.readFileSync(filePath);
const str=databuffer.toString();
const user=JSON.parse(str);
user.name='lopes';
user.age=95;

const userJSON=JSON.stringify(user);
fs.writeFileSync(filePath,userJSON,{flag:'w'});
