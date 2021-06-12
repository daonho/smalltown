const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res){
  if(req.body.tk === "hungducbl" & req.body.mk === "Yenxinhgaiso1"){
    res.sendFile(__dirname  + "/success.html");
  }
  else {
    res.sendFile(__dirname  + "/failure.html");
  }

});
app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(8080, function(){
  console.log("server is runing on port 3000")
})
