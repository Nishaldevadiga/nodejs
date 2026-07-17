import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

app.use(express.static(path.join(__dirname, '../public')))


//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('server started...');
})