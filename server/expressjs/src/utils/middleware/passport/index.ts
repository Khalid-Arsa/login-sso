var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/facebook',
  state: true
}, function verify(accessToken: any, refreshToken: any, profile: any, cb: any) {
  console.log("Profile: ", profile)
}));

passport.serializeUser(function(user: any, cb: any) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user: any, cb: any) {
  process.nextTick(function() {
    return cb(null, user);
  });
});