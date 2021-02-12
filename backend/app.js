const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const trainingRouter = require("./routes/training");
const progressRouter = require("./routes/progress");
const authRouter = require("./routes/auth");
const calendarRouter = require("./routes/calendar");
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
// const isAuth = require('../middleware/is-auth');

var allowlist = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:8081']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(bodyParser.json());
app.use("/user", cors(corsOptionsDelegate), userRouter);
app.use("/training", cors(corsOptionsDelegate), trainingRouter);
app.use("/pro", cors(corsOptionsDelegate), progressRouter);
app.use("/calendar", cors(corsOptionsDelegate), calendarRouter);
app.use("/auth", cors(corsOptionsDelegate), authRouter);

mongoose
  .connect(
    'mongodb+srv://arso:secret123@cluster0.rpcsr.mongodb.net/leetdb?retryWrites=true&w=majority'
    , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log("Connected to mongoDB")
    console.log(`App listening on PORT {${3000}}`)
    app.listen(3000);
  })
  .catch(err => console.log(err));
