const express = require("express");
const router = express.Router();

const randomBearerToken = "abcxyz";
let isLoggedIn = false;
router.get("/api/login", function(req, res) {
  if (req.session.token) {
    res.sendStatus(200);
  } else {
    req.session.payload = { access_token: randomBearerToken };
    res.sendStatus(201);
  }
});
router.get("/api/isLoggedIn", function(req, res) {
  //  const isLoggedIn = Math.random() >= 0.5;
  if (req.session && req.session.payload) {
    const { access_token } = req.session.payload;
    res.status(200);
    res.json({ isLoggedIn: true, access_token });
  } else {
    res.sendStatus(401);
  }
});
router.get("/api/logout", function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
