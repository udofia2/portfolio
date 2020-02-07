const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config({ path: "config.env" });

const app = express();
const db = process.env.MONGODB_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log(dotenv);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 9890;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
