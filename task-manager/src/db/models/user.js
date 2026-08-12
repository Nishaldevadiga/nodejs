import mongoose from 'mongoose';


await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
    },
    email:{
     type:String,
     required:true,
    },
    age: {
        type: Number,
        default:0,
    }
})

module.exports=User

