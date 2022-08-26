const express = require("express");
const data = require("./data/movies.json");
const PORT = process.env.PORT || 5555;
const app = express();

app.get("/", (req, res) => {
  let responseText = { movies: [] };
  data["movies"].forEach((movie) => {
    responseText["movies"].push(movie["title"]);
  });
  // console.log(responseText);
  res.send(responseText);
});

app.listen(PORT, (err) => {
  console.log("listening");
});
