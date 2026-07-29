//CRUD operations

import * as mongodb from 'mongodb';

const mongoClient=mongodb.MongoClient;

const connectionURL ='mongodb://127.0.0.1:27018';
const database='task-manager';

mongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log('error');
    }
        console.log('success');
})
