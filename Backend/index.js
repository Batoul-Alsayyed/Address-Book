const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const contactRoute = require('./routes/contacts');
dotenv.config();

//connect to DB
// mongoose.connect(
//   process.env.DB_CONNECT,
//   { useNewURLParser: true },
//   () => console.log("connected to db")
// );
const username = "Batoul";
const password = "B%401234";
const cluster = "cluster0.bfprh5q";
const dbname = "Address_Book";
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const db = mongoose.connection;
console.log(db)
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Middleware 
//body parser to be able to use post requests 

app.use(express.json());

//Routes Middlewares

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/contacts", contactRoute);

app.listen(3000, () => console.log("Server up and running"));
