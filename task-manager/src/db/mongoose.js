import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
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
    age:-2
})

me.save().then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})