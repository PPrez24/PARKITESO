const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");
const dotenv = require("dotenv");

dotenv.config();

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      tokenURL: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      clientID: process.env.AZURE_CLIENT_ID,
      clientSecret: process.env.AZURE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/auth/microsoft/callback`,
      scope: ["openid", "profile", "email", "User.Read"],
    },
    async (accessToken, refreshToken, params, done) => {
      try {
        const response = await axios.get("https://graph.microsoft.com/v1.0/me", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const userProfile = response.data;
        return done(null, { accessToken, user: userProfile });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
