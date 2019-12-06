const express = require("express");
const http = require("http");
const next = require("next");

const port = process.env.PORT || 8080;
const api = require("./api");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "./"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  server.use(api);
  // handling everything else with Next.js
  server.get("*", handle);

  http.createServer(server).listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
