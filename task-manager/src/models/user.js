import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    }
})

export default User

