const routes = function(app) {
  const express = require("express");
  app.get("/api/route1/test", function(req, res) {
    res.status(200);
    const router = express.Router();
    res.json({ message: "I am ok" });
  });
  router.use(bodyParser.json());
};

module.exports = routes;
