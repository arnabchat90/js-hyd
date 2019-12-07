<<<<<<< HEAD
const express = require("express");
const api = require("./api");
const api2 = require("./api2");
const bodyParser = require("body-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");

const authApi = require("./passport/index");
const passport = require("./passport/passportConfig");
const prod = process.env.NODE_ENV === "production";
const server = express();

// Session config
const hour = 3600000;
const fileStoreOptions = {};
const appFileStore = new FileStore(fileStoreOptions); // persist session in local file store
const appSession = session({
  store: appFileStore,
  secret: "abc123", // ENV VARIABLE
  maxAge: hour,
  rolling: true,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: hour, secure: prod } // secure: true for https reuqests only
});

// Add session, body and cookie parser
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(appSession);
authApi(server);

// ADD ROUTES
api(server);
api2(server);
// PASSPORT CONFIG

module.exports = server;
=======
const express = require('express')
const api = require('./api')
const api2 = require('./api2')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const cookieParser = require('cookie-parser')

const authApi = require('./passport/index')
const passport = require('./passport/passportConfig')
const prod = process.env.NODE_ENV === 'production'
const server = express()

// Session config
const hour = 3600000
const fileStoreOptions = {}
const appFileStore = new FileStore(fileStoreOptions) // persist session in local file store
const appSession = session({
  store: appFileStore,
  secret: 'abc123', // ENV VARIABLE
  maxAge: hour,
  rolling: true,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: hour, secure: prod } // secure: true for https reuqests only
})

// Add session, body and cookie parser
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(appSession)
authApi(server)

// ADD ROUTES
api(server)
api2(server)
// PASSPORT CONFIG

module.exports = server
>>>>>>> d2f68b28a5ec7f7c313fdca28d726b75e4195257
