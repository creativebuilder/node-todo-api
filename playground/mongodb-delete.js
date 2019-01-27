
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Could not connect to the TodoApp db");
    }
    console.log("Connected to the mongoDB server");
    const db = client.db("TodoApp");

    //deleteMany
    // db.collection("Todos").deleteMany({ text: "eat lunch" }).then((response) => {
    //     console.log(response);
    // })

    //deleteOne
    // db.collection("Todos").deleteOne({ text: "eat lunch" }).then(function (response) {
    //     console.log(response);
    // }, function (err) {
    //     console.log("Could not delete the specified record", err);
    // })

    //findOneandDelete
    // db.collection("Todos").findOneAndDelete({ completed: false }).then((response) => {
    //     console.log(response);
    // })

    //deleteMany in the users collection
    // db.collection("Users").deleteMany({ name: "sachin" }).then(function (response) {
    //     console.log(response);
    // })

    //findOneAndDelete by ID in the user
    db.collection("Users").findOneAndDelete({ _id: new ObjectID("5c4e00d5ca7839395cce6feb") }).then((response) => {
        console.log(response);
    }, (err) => {
        console.log("Unable to delete the document", err);
    })


    //db.close()

})