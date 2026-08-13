import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

const startApp = (currentPort) => {
    const server = app.listen(currentPort, () => {
        console.log('Server is up on port ' + currentPort)
    })

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE' && currentPort === port) {
            console.warn(`Port ${currentPort} is already in use, trying ${currentPort + 1}`)
            startApp(currentPort + 1)
            return
        }

        console.error('Server failed to start:', error)
        process.exit(1)
    })

    return server
}

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

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.send(user);
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
})

const startServer = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
            serverSelectionTimeoutMS: 5000,
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Failed to start application:', error)
        process.exit(1)
    }
}

startServer()
startApp(port)



