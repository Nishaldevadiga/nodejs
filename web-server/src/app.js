import express from 'express';

const app=express()

app.get('',(req,res)=>{
   res.send('<h1>Express.js welcome</h1>')
})

app.get('/help',(req,res)=>{
   res.send('Help!')
})

app.get('/about',(req,res)=>{
   res.send('about!')
})

app.get('/weather',(req,res)=>{
   res.send('weather!')
})



//app.com
//app.com/help
//app.com/about

app.listen(3000,()=>{
    console.log('server started...');
})