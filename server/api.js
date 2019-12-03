const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

// oAUTH API CONTROLLERS HERE ( ONLY PUBLIC)
router.get('/api/test', function(req,res) {
    res.status(200);
    res.json({message: "I am ok"});
});


module.exports = router;


