const express = require("express");
const api = require("./api");
const api2 = require("./api2");
const bodyParser = require("body-parser");
const session = require("express-session");
const MemoryStore = require('memorystore')(session)
const cookieParser = require("cookie-parser");

const authApi = require("./passport/index");
const passport = require("./passport/passportConfig");
const prod = process.env.NODE_ENV === "production";
console.log(prod, 'is production');
const server = express();

// Session config
const hour = 3600000;
const fileStoreOptions = {
  checkPeriod: hour
};
const appSessStore = new MemoryStore(fileStoreOptions); // persist session in local file store
const appSession = session({
  store: appSessStore,
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

server.use(appSession);
authApi(server);

// ADD ROUTES
api(server);
api2(server);
// PASSPORT CONFIG

module.exports = server;
