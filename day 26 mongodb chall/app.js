const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

  const db = client.db('mydb');
const collection = db.collection('users');

collection
  .insertMany([{ name: "zack", age: "25" },{name: 'John', age:'30'},{name: 'othman', age:'20'}])
  
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));
 
  collection
  .find().toArray()
  .then((user) => console.log(user))
  .catch((error) => console.log("Error: ", error));

//   collection.deleteMany({name: 'John'})

collection
.updateOne({})
