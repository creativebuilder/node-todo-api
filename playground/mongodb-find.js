//pull of the mongoclient from the mongodb

const { MongoClient, ObjectID } = require("mongodb");
//const {MongoClient} = require("mongodb");

//MongoClient.connect() takes two arguments - connectionUrl,callback function

MongoClient.connect("mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDb Server");
    }
    const db = client.db("TodoApp");
    console.log("Connected to MongoDB server");

    //we fetch the entire collection as array here
    // db.collection("Todos").find({ completed: true }).toArray().then((response) => {
    //   console.log("Todos");
    //   console.log(JSON.stringify(response, undefined, 2));
    // }, (err) => {
    //   console.log("Error in fetching the documents", err);
    // })

    //to fetch the document based on the object ID
    // db.collection("Todos").find({
    //   _id: new ObjectID("5c4dfccfe0013c809229c4b0")
    // }).toArray().then((response) => {
    //   console.log(JSON.stringify(response, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to fetch the documents", err);
    // })

    // //to get the count of the documents mathcing an object id using the cursor returned by the mongodb find()
    // db.collection("Todos").find({
    //   _id: new ObjectID("5c4dfccfe0013c809229c4b0")
    // }).count().then((response) => {
    //   console.log(`Todos count is ${response}`);
    // }, (err) => {
    //   console.log("Unable to fetch the documents", err);
    // })

    db.collection("Users").find({ name: "sachin" }).toArray().then((response) => {
      console.log(JSON.stringify(response, undefined, 2));
    }, (err) => {
      console.log("Unable to fetch records", err);
    })

    //client.close();
  }
);
