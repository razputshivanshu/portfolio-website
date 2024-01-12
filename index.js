const express = require("express");
const path = require('path');
const app = express();
const port = 8000;



//built in middleware

// console.log(path.join(__dirname, './public'));


const staticPath = path.join(__dirname, './public');
app.use(express.static(staticPath));



function callback(req,res){
  res.send('Hello from this server!!');
}



app.get('/',callback);


app.listen(port, ()=>{
  console.log(`listening to port ${port}`)
})