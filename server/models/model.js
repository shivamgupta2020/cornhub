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
    comment:{
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    address:{
        type: String,
        required: true
    },
    last_liked:{
        type: Date,
        required: false
    }
})

const  Video = mongoose.model('video', videoSchema);
const  Image = mongoose.model('image', imageSchema);
const  Comment = mongoose.model('comment', commentSchema);
const  User = mongoose.model('user', userSchema);
module.exports = {
    Video,
    Image,
    Comment,
    User
}