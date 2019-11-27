const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// setup the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
