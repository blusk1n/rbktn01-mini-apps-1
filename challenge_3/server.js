const express = require('express');
var bodyParser = require('body-parser')


let app = express();

app.use(express.static('compiled/client'));
let PORT =  5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.listen(PORT, function() {
    console.log(`listening on PORT ${PORT}`);
  });
  const mongoose = require("mongoose");
  mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

  const Schema = mongoose.Schema;
  var nameSchema =  new Schema({
    name:String,
    email:String,
    password:String,
    line1:String,
    line2:String,
    city:String,
    state:String,
    zipCode:String,
    phone:String,
    nameonCard:String,
    cardNum:String,
    expMonth:String,
    expYear:String,
    cvv:String,

   });
   var Users = mongoose.model("Users", nameSchema);

  app.post('/', (req, res) => {
    var product = new Users(req.body)
    res.sendStatus(200);
    product.save(function (err ) {
        if (err) return console.error(err);
        
      });
    })
