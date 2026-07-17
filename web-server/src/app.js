import express from 'express';

const app=express()

app.get('',(req,res)=>{
   res.send('Hello express!')
})

app.get('/help',(req,res)=>{
   res.send('Help!')
})



//app.com
//app.com/help
//app.com/about

app.listen(3000,()=>{
    console.log('server started...');
})