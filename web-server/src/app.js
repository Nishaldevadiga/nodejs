import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath=path.join(__dirname, '../public')
const viewsPath=path.join(__dirname, '../templates/views')
const partialsPath=path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:"hbs content",
        name:"nishal sukumar"
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
         title:"About",
        name:"nishal sukumar"
    })
})


//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('server started...');
})