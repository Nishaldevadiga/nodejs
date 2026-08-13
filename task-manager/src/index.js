import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('MongoDB connection error:', error);
})

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((err) => {
        res.status(400);
        res.send(err);
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
})



