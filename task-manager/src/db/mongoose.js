const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27018/task-manager-api',{
   useCreateIndex:true
})

const User=mongoose.model('User',{
  
})