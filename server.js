const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3300;
//--------express-----------//
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//--------statics-------------//
app.use(express.static("public"));

const dbConfig = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/test";
mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//------------*--routes--*---------------//
app.use(require("./routes/api.js"));
//-----------Listen----------------//
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});