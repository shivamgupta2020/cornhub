const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const port = 5000
require('dotenv').config()
app.use(cors(
    {
        origin: ['https://cornhub-nine.vercel.app'],
        methods: ['GET, POST'],
        credentials: true
    }
))
app.use(express.json())
const { Video, Image, Comment } = require('./models/model')

//get all videos
app.get('/get-video', async (req, res) => {
    try {
        const response = await Video.find({})
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
//get all images
app.get('/get-images', async (req, res) => {
    try {
        const response = await Image.find({})
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
//get all comments
app.get('/get-comment', async (req, res) => {
    try {
        const response = await Comment.find({})
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
//get a single video
app.get('/get-video/:id', async (req, res) => {
    try {
        const response = await Video.findById(req.params.id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})

//get a single image
app.get('/get-image/:id', async (req, res) => {
    try {
        const response = await Image.findById(req.params.id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})

//update a video
app.put('/update-video/:id', async (req, res) => {
    try {
        const response = await Video.findByIdAndUpdate(req.params.id, req.body)
        res.send('Data updated')
    }
    catch (error) {
        console.log(error)
        res.send('Error')
    }
})

//update an image
app.put('/update-image/:id', async (req, res) => {
    try {
        const response = await Image.findByIdAndUpdate(req.params.id, req.body)
        console.log(response)
        res.send('Data updated')
    }
    catch (error) {
        console.log(error)
        res.send('Error')
    }
})

//delete a video
app.delete('/delete-video/:id', async (req, res) => {
    try {
        const response = await Video.findByIdAndDelete(req.params.id)
        console.log(response)
        res.send('Data deleted')
    }
    catch (error) {
        console.log(error)
        res.send('Error')
    }
})

//delete an image
app.delete('/delete-image/:id', async (req, res) => {
    try {
        const response = await Image.findByIdAndDelete(req.params.id)
        console.log(response)
        res.send('Data deleted')
    }
    catch (error) {
        console.log(error)
        res.send('Error')
    }
})


//post a comment
app.post('/post-comment', async (req, res) => {
    try {
        const data = req.body;
        const response = await Comment.create(data)
        console.log(response)
        res.send('Data uploaded')
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
//post an image
app.post('/post-image', async (req, res) => {
    try {
        const data = req.body;
        const response = await Image.create(data)
        console.log(response)
        res.send('Data uploaded')
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
//post a video
app.post('/post-video', async (req, res) => {
    try {
        const data = req.body;
        const response = await Video.create(data)
        console.log(response)
        res.send('Data uploaded')
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})

mongoose.connect(process.env.DB_URI).then((result) => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
}).catch((err) => {
    console.log('Failed to connect to the database', err)
})

