const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
 app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/HTMLroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
