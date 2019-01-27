//pull of the mongoclient from the mongodb

const MongoClient = require("mongodb").MongoClient;
//const {MongoClient} = require("mongodb");

const { ObjectID } = require("mongodb");
var obj = new ObjectID();
console.log(obj);

//MongoClient.connect() takes two arguments - connectionUrl,callback function

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDb Server");
    }
    const db = client.db("TodoApp");

    console.log("Connected to MongoDB server");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert a document", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    //Insert new doc into users collection(name,age,location)

    db.collection("Users").insertOne(
      {
        name: "raina123",
        age: 31,
        location: "Uttar Pradesh"
      }, (err, result) => {
        if (err) {
          return console.log("Unable to insert document into Users", err);
        }
        //used to print pull out the timestamp from the object id
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
      }
    );

    client.close();
  }
);
