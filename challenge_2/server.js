const express = require('express');
const fs = require("fs")
const bodyParser = require('body-parser')
const csv = require('csv-parser');
let app = express();
let PORT =  5000;
app.use(express.static('client'));
app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}`);
});
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json()) 

app.post('/hello', function (req, res) {
    var tester = JSON.parse(req.body.test)
    helper(tester)
    var data = fs.readFileSync('samples/test.csv', 'utf8')
    console.log(data)
    res.send(data)



  })
  
  

  let helper =(json)=>{
    let keyStr = "";
    for(key in json){
        keyStr+=key+","
    }
    fs.writeFile('./samples/test.csv', keyStr.substring(0, keyStr.length - 1) , (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('saved!');
    
    });
    let recurse = (json)=>{
        let propStr ="";
        Object.keys(json).forEach(key=>{
            propStr+=json[key]+"," 
            if(Array.isArray(json[key])&& json[key].length !==0 ){
                json[key].forEach(elm=>{
                    recurse(elm)
                })
            }     

        }) 

        fs.appendFile('./samples/test.csv', "\n"+propStr.substring(0, keyStr.length - 1), function (err) {
            if (err) throw err;
            console.log('added!');
          });
         
    }
    recurse(json)
  }

  