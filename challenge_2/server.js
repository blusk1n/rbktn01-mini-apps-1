const express = require('express');
const fs = require("fs")
let app = express();
let PORT =  5000;
app.use(express.static('client'));
app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}`);
});

fs.readFile('./samples/sales_report.json', (err, data) => {
    if (err) throw err;
    let files = JSON.parse(data);
    app.get("/hello",  (req, res) => {
        res.send(files);
      });
});

