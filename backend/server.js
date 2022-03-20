// pulls in the express library
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt-nodejs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const AuthControls = require("./controllers/authController");
const PhotoControls = require("./controllers/photoController");
const UserControls = require("./controllers/userController");

require("dotenv").config();

mongoose.connect(
  process.env.databaseURL,
  {
    useNewUrlParser: true,
    // userNewParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is Connected");
  }
);

// allows us to write app and the crud action we want ex. app.get | app.post | app.delete etc...
const app = express();

// middleware
app.use(express.json()); // =>  allows us to read the request or req body
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
// require("./utils/passportConfig")(passport);

//------------------------END OF MIDDLEWARE----------------------------
// define what localhost port we want our server to run on
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Shuttr Server");
});

app.post("/photos/upload", PhotoControls.upload);
app.get("/photos/all", PhotoControls.all);
app.get("/photos/getLatest", PhotoControls.getLatest);

app.post("/signup", AuthControls.signup);
app.get("/logout", AuthControls.logout);
app.get("/user", AuthControls.user);

app.get("/user/:username", UserControls.username);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
