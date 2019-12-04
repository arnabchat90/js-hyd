const express = require("express");
const http = require("http");
const next = require("next");

const port = process.env.PORT || 8080;
const api = require('./api');

const dev = process.env.NODE_ENV !== "production";
console.log(dev)
const app = next({
  dev,
  dir: "./"
});
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express();
  
    server.use(api);
  
    // handling everything else with Next.js
    server.get("*", handle);
  
    http.createServer(server).listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });