console.log("TEST");

const express = require("express");

const app = express();

let roleModel = {
  name: "Mariana Costa",
  occupation: "mom",
  languages: ["Portuguese"],
};

app.get("/roleModel", (request, response) => {
  response.json(roleModel);
});

app.listen(5005);
