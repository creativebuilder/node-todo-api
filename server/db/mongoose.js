const mongoose = require("mongoose");

//set the mongoose to use the in-built promise
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
    mongoose: mongoose
}