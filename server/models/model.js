const mongoose = require('mongoose')
const {Schema} = mongoose;

const videoSchema = new Schema({
    title:{
        type: String,
        required: false
    },
    link:{
        type: String,
        required: false
    },
    share_link:{
        type: String,
        required: false
    },
    like:{
        type: Number,
        required: true
    }
})

const imageSchema = new Schema({
    link:{
        type: String,
        required: true
    }
})

const commentSchema = new Schema({
    user:{
        type: String,
        required: false
    },
    comment:{
        type: String,
        required: true
    }
})

const  Video = mongoose.model('video', videoSchema);
const  Image = mongoose.model('image', imageSchema);
const  Comment = mongoose.model('comment', commentSchema);
module.exports = {
    Video,
    Image,
    Comment
}