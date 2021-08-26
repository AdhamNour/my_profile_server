const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const apirouter =require("./routes/apiRoutes");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

//APIs;
app.use('/api',apirouter)

app.get("/", function (req, res) {
  console.log("KAK");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3500;

app.listen(port, () => console.log(`listen to PORT ${port}`));
