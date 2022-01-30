require('dotenv').config();

const mongoose = require("mongoose");
const error = require('mongoose/lib/error');




function connectDB() {
    // Database Connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database Connected.');
    })
}

module.exports = connectDB; 