const mongoose = require('mongoose')
const {Schema} = mongoose;

const videoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    share_link:{
        type: String,
        required: true
    },
    like:{
        type: Number,
        required: true
    }
},{timestamps: true})

const imageSchema = new Schema({
    link:{
        type: String,
        required: true
    }
},{Timestamp: true})

const commentSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
},{Timestamp: true})

const  Video = mongoose.model('video', videoSchema);
const  Image = mongoose.model('image', imageSchema);
const  Comment = mongoose.model('comment', commentSchema);
module.exports = {
    Video,
    Image,
    Comment
}