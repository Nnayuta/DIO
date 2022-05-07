const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: Date,

}, {
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        },
    },
    versionKey: false
});

const PostModel = mongoose.model('Post', schema);

exports.PostModel = PostModel;