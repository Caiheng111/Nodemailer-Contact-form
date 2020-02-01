const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app =express();


// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

//body parser middlewear
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.post('/api/form',(req,res)=>{
  console.log(req.body);
  
})

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
  console.log(`Server listening on port ${PORT}`);
  
})