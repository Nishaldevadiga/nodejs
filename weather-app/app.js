import request from "request";


//https://api.weatherstack.com/current?access_key=240dc3cf8d5c17af59461186bfe66513&query=42.2626,-71.8023

const url='https://api.weatherstack.com/current?access_key=240dc3cf8d5c17af59461186bfe66513&query=42.2626,-71.8023';

request({url,json:true},(err,res)=>{
console.log(res.body.current);
})