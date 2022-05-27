const express = require("express");
const characterService = require("./services/getDataService");

const app = express();
const port = 3000;

const character = new characterService();
character.requestData();

console.log(character);
//app.use("/", routes({ getData }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
