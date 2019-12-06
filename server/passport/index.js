const express = require('express')
const router = express.Router()
const passport = require('./passportConfig');

const setAuthRouter = function (router) {
  router.use(passport.initialize())
  router.use(passport.session())
  // path to start the OAuth flow
  router.get('/api/slack/auth', passport.authorize('slack'))

  // OAuth callback url
  router.get(
    '/api/slack/callback',
    passport.authenticate('slack', { failureRedirect: '/login' }),
    (req, res) => {
      const { user } = req
     res.redirect('/api/slack/isLoggedIn')
    }
  )
  router.get('/api/slack/isLoggedIn', function (req, res) {
    //  const isLoggedIn = Math.random() >= 0.5;
    console.log(req.user)
    console.log(req.session)
    if (req.user) {
      const { user } = req
      res.status(200)
      res.json({ isLoggedIn: true, user })
    } else {
      res.redirect('/api/slack/callback')
    }
  })
  return router
}
module.exports = setAuthRouter
