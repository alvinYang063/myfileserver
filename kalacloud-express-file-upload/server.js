const cors = require("cors");
const express = require("express");
const app = express();
global.__basedir = __dirname;
var corsOptions = {
  origin: "http://74.211.109.80:8080"
};
app.use(cors(corsOptions));
const initRoutes = require("./src/routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8081;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
