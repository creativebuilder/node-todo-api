
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Could not connect to the TodoApp db");
    }
    console.log("Connected to the mongoDB server");
    const db = client.db("TodoApp");

    //update the "completed" property based on the objectID
    // db.collection("Todos").findOneAndUpdate({ _id: new ObjectID("5c4e05f5e0013c809229c730") }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false
    //     });


    //update the "name" based on the objectID and view the documentation and make use
    //of the update operator "$set"
    //API url - http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOneAndUpdate
    //CRUD native node mongo driver URL - http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5c4df08dd4de3211084266a6")
    }, {
            $set: {
                name: "suresh raina"
            },
            $inc: {
                age: 10
            }
        }, {
            returnOriginal: false
        }).then(function (response) {
            console.log("Updated succesfully");
        }, function (err) {
            console.log("Cannot update successfully", err);
        })


    //db.close()

})