import mongoose from 'mongoose';
import validator from 'validator';

await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
    },
    email:{
     type:String,
     required:true,
             validate: {
                 validator(value) {
                     return validator.isEmail(value);
                 },
                 message: 'Invalid Email'
             }
    },
    age: {
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('age cannot be less than 0');
                
            }
        }
    }
})


