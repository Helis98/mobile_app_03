const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js');
const logRouter = require('./routes/logRoutes.js');
const goalRouter = require('./routes/goalRoutes.js');
const automation = require('./routes/automation.js');
const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser');

//const tokenRouter = require('./routes/tokenRoutes.js');


/*let transporter = nodemailer.createTransport({
  host: 'gmail',
  
  auth: {
      user: 'fitnessgroup69@gmail.com',
      pass: 'pogword69'
  }
}); 

let mailOptions = {
  from: 'fitnessgroup69@gmail.com', // sender address
  to: 'gamecube756@gmail.com', // list of receivers
  subject: "Hello ", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
};*/




const path = require('path');           
const PORT = process.env.PORT || 3001;  
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://chad:chad@cluster0-ngfs4.mongodb.net/Project?retryWrites=true&w=majority', {
  useNewUrlParser: true
});



//app.use(tokenRouter);
app.use(userRouter);
app.use(automation);
app.use(logRouter);
app.use(goalRouter);
app.listen(PORT, () => {  console.log(`Server listening on port ${PORT}.`);});
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))});