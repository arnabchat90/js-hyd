const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

// oAUTH API CONTROLLERS HERE ( ONLY PUBLIC)
router.get("/api/test", function(req, res) {
  res.status(200);
  res.json({ message: "I am ok" });
});

router.get("/api/login", function(req, res) {
  res.status(401);
  res.json({ isLoggedin: false, authToken: "d" });
});

module.exports = router;
