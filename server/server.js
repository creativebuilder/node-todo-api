// const mongoose = require("mongoose");

// //set the mongoose to use the in-built promise
// mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost:27017/TodoApp");

//defining a model using Mongoose

// const Todo = mongoose.model("Todo", {
//     text: {
//         type: String,
//         //mongoose validators
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }, completedAt: {
//         type: Number,
//         default: null
//     }
// });

/*
//creating an instance of Todo
var newTodo = new Todo({
    text: "Cook Dinner"
})

//to save a new Todo value
newTodo.save().then((response) => {
    console.log("Saved todo", response);
}, (err) => {
    console.log("Cannot save");
})
*/

// var newTodo = new Todo({
//     text: "Eat something",
//     completed: false,
//     completedAt: 0
// });

// newTodo.save().then((response) => {
//     console.log("Saved successfully", response);
// }, (err) => {
//     console.log("Could not save the document");
// })

// const User = mongoose.model("User", {
//     email: {
//         type: String,
//         required: true,
//         minlength: 1
//     }
// });

// var newUser = new User({
//     email: "abc@abc.com"
// });

// newUser.save().then((response) => {
//     console.log(response);
// }, function (err) {
//     console.log("Could not save the data");
// })

//codes have been commented because the above code has been modularized

var express = require("express");
var bodyParser = require("body-parser");


var mongoose = require("./db/mongoose").mongoose;
var Todo = require("./models/todo").Todo;
var { User } = require("./models/user");

var app = express();


//the bodyparser extracts the entire body portion of the incoming requests and puts it 
//into req.body either in json
//app.use(bodyParser.urlEncoded());
app.use(bodyParser.json());


app.post("/todos", function (req, res) {
    //req.body contains the incoming data in the form of json - parsed using body parser
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((response) => {
        res.send(response);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.listen(3000, function () {
    console.log("Started app on port 3000");
});






