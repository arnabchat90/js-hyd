const { CLIENT_SLACK_ID, CLIENT_SLACK_SECRET,CLIENT_SLACK_CALLBACK } = process.env;
const SlackStrategy = require("passport-slack").Strategy;
const passport = require("passport");
const refresh = require("passport-oauth2-refresh");

const persistence = require("../persistence/index");

// setup the strategy using defaults
passport.use(
  new SlackStrategy(
    {
      clientID: CLIENT_SLACK_ID,
      clientSecret: CLIENT_SLACK_SECRET,
      callbackURL: CLIENT_SLACK_CALLBACK
    },
    (accessToken, refreshToken, profile, done) => {
      // optionally persist profile data
      const { id } = profile;
      const user = {
        authsource: "slack",
        accessToken,
        refreshToken,
        id,
        profile
      };
      persistence
        .getUserProfileAsync(user)
        .then(function(u) {
          if (!u) {
            throw "database returned null";
          }
          
          accessToken = persistence.generateJWTTokenSync(u);
          console.log(accessToken, 'accessToken')
          u.accessToken = accessToken;
          console.log(u);
          done(null, u);
        })
        .catch(function(err) {
          done(err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serialising user')
  console.log(user);
  done(null, user)
});
passport.deserializeUser((user, done) => {
  console.log('de-serialising user')
  console.log(user);
  done(null, user)
});

module.exports = passport;
