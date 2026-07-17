import express from 'express';

const app = express()

const hello=function(){
    debugger;
    console.log("hello");
}

hello();

app.get('/', (req, res) => {
    debugger;
    res.send([{
        name: "nishal",
        id: 45
    }, {
        name: "kiran",
        id: 67
    }])
})

app.get('/help', (req, res) => {
    res.send('Help!')
})

app.get('/about', (req, res) => {
    debugger
    console.log('here');
    res.send('<h2>About</h2>')
})

app.get('/weather', (req, res) => {
    res.send({
        location:"worcester",
        weather:"sunny"
    })
})



//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('server started...');
})