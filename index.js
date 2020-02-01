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
  // console.log(req.body);
  nodemailer.createTestAccount((err,account)=>{
    const htmlEmail= `
    <h3>Contact Deatils</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Name: ${req.body.cpmpany}</li>
      <li>Name: ${req.body.phone}</li>
    </ul>
    <h3>${req.body.message}</h3>`

    let transporter= nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'kendall.gibson8@ethereal.email',
          pass: 'w6kgujq86rJYnwvMfJ'
      }
    })

    let mailOptions ={
      from:"test@testaccount.com",
      to:"kendall.gibson8@ethereal.email",
      replyTo:"test@testaccount.com",
      subject:`new message from ${req.body.email}`,
      test:req.body.messsage,
      html:htmlEmail
    }

    transporter.sendMail(mailOptions,(err,info)=>{

      if(err){
        return console.log(err);
      }
      console.log("Message sent: %s", info.messageId);
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
      
    })

  })
})

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
  console.log(`Server listening on port ${PORT}`);
  
})