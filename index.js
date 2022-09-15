const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/current", async (req, res) => {
  var name = req.query.name;
  var year = req.query.year;
  const todaysDate = new Date();
  const currentYear = todaysDate.getFullYear();

  const age = currentYear - year;
  console.log("year:", currentYear);
  console.log("age:", age);

  res.send(`
        <p>Hello ${name}</p>
        <p>you are currently ${age} years old.</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//http://localhost:8080/api/current?year=1999&month=12&date=10&name=abhishek
