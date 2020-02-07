const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv").config({ path: "config.env" });

const app = express();
const db = process.env.MONGODB_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.set('views', 'views')

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 9890;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
