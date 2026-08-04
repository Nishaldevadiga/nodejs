import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


const me = new User({
    name: "Nishal",
    age: 28
})

me.save().then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})