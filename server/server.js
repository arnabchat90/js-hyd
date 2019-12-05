const express = require("express");
const http = require("http");
const next = require("next");

const port = process.env.PORT || 8081;


const dev = process.env.NODE_ENV !== "production";
console.log(dev)
const app = next({
  dev,
  dir: "./"
});
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = require('./serverconfig');
  
    // handling everything else with Next.js
    server.get("*", handle);
  
    http.createServer(server).listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });