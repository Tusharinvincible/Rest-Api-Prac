const mongodb = require("mongodb");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
// id -> 12 bytes 4 bytes Timestamp 5 bytes Random Number 3 byte Random Number
MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
  },
  (error, client) => {
    // console.log("hit1");
    if (error) {
      return console.log("connection Error");
    }
    console.log("connected successfully");
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Pranav",
    //     age: 16,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Insertion Error");
    //     }
    //     console.log(result);
    //   }
    //  );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Learning Rest Api's",
    //       boolean: false,
    //     },
    //     {
    //       description: "Solving DSA-CP Problems",
    //       boolean: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error in Inserting Many Documents");
    //     }
    //     console.log(result);
    //   }
    // );

    // Find

    // db.collection("users")
    //   .find({})
    //   .toArray((error, users) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log(users);
    //     }
    //   });

    // Update
    // db.collection("tasks").updateMany(
    //   { boolean: false },
    //   {
    //     $set: {
    //       boolean: true,
    //     },
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log("Error in Update");
    //     }
    //     console.log(res);
    //   }
    // );
    // Output {
    //   acknowledged: true,
    //   modifiedCount: 3,
    //   upsertedId: null,
    //   upsertedCount: 0,
    //   matchedCount: 3
    // }
  }
);

// mongoose.connect(
//   connectionURL,
//   {
//     dbName: databaseName,
//     useNewUrlParser: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

app.get("", (req, res) => {
  res.send("Home Page");
});
app.listen(3030, () => {
  console.log("server is running on Port 3000");
});
