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
        validate(value){
            if(value<0){
                throw new Error('age cannot be less than 0');
                
            }
        }
    }
})


const me = new User({
   
    name:'kiran',
    age:30,
    email:'kiran'
})

me.save().then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})