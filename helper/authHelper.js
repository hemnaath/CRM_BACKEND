// authHelper.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require ('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:1731/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user data in the session
      return done(null, profile);
    }
  )
);

module.exports = passport;