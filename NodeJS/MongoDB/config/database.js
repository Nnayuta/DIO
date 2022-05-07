const mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;

const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASS)

const config = {
    uri: `mongodb+srv://${username}:${password}@cluster0.1pgzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true,
    },
}

mongoose.connection.on('open', () => {
    console.log('Mongoose connected');
})

mongoose.connection.on('error', (err) => {
    throw new Error('Mongoose connection error: ' + err);
})

exports.connect = () => {
    return mongoose.connect(config.uri, config.options);
}