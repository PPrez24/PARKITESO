const express = require("express");
const passport = require("passport");
const cors = require("cors");

const router = express.Router();

router.use(cors({ origin: process.env.FRONTEND_URL }));

router.get(
  "/auth/microsoft",
  passport.authenticate("oauth2", { session: false })
);

router.get(
  "/auth/microsoft/callback",
  passport.authenticate("oauth2", { failureRedirect: "/" }),
  (req, res) => {
    res.json({ token: req.user.accessToken, user: req.user.user });
  }
);

module.exports = router;
