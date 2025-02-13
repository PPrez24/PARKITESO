const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
require("./auth"); 

const app = express();
app.use(passport.initialize());

app.use(authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
