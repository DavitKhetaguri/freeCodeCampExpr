var express = require('express');
var app = express();



app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  console.log("Hello World!");
  next();
})



let absolutePath = __dirname + "/views/index.html";


app.get("/", (rq, res) => { res.sendFile(absolutePath); })


app.use("/public", express.static(__dirname + "/public"));





app.get('/json', (req, res) => {
  process.env.MESSAGE_STYLE === 'uppercase' ?
    res.json({ "message": "HELLO JSON" }) :
    res.json({ "message": "Hello json" })
});
module.exports = app;






