var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(bodyParser.json())

   app.get("/api/data", (req, res, next) => {
    console.log("Connected");
    res.status(200)
   });

   app.post("/api/data", (req, res, next) => {
    console.log(req.body)
    res.status(201)
    res.json(req.body)
   });

   app.get("/", (req, res, next) => {
     res.status(200)
    res.json({status: true, message: "Connected"})
   });

app.listen(process.env.PORT, () => {
 console.log("Server running on port 8000");
});