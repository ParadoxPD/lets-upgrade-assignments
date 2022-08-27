const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const data = require("./data/db.json");
const PORT = process.env.PORT || 5555;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // let responseText = { movies: [] };
  // data["movies"].forEach((movie) => {
  //   responseText["movies"].push(movie["title"]);
  // });
  // console.log(responseText);
  let responseText = data["movies"].push();
  res.send(responseText);
});

app.post("/", (req, res) => {
  let newData = data["movies"];
  let newMovies = req.body.movies;
  // console.log(newMovies);
  newMovies.forEach((movie) => {
    newData.push(movie);
  });
  // console.log(newData[newData.length - 1]);
  fs.writeFile("./data/db.json", JSON.stringify(newData), function (err) {
    if (err) {
      console.log(err);
      res.status(500);
    }
  });
  res.send("done");
});

app.listen(PORT, (err) => {
  console.log("listening");
});
