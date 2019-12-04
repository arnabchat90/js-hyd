const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');

const router = express.Router()


const hour = 3600000;
const fileStoreOptions = {}
const appFileStore = new FileStore(fileStoreOptions)
const appSession = session({
  store: appFileStore,
  secret: 'abc123',
  resave: false,
  saveUninitialized: true,
  maxAge: hour,
  cookie: { secure: true }
})


router.use(bodyParser.json());
router.use(cookieParser());
router.use(session)

// oAUTH API CONTROLLERS HERE ( ONLY PUBLIC)
var authAPILayer = require('./passport/index');
authAPILayer(router);

router.get('/api/test', function (req, res) {
  res.status(200)
  res.json({ message: 'I am ok' })
})

module.exports = router
