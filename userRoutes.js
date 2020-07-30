const express = require('express');
const userModel = require('../models/UserSchema');
const logModel = require('../models/LogSchema');
const goalModel = require('../models/GoalsSchema');
const bodyParser = require('body-parser');
const Bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const app = express();
const crypto = require('crypto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



/*const transporter = nodemailer.createTransport({
  host: 'gmail',
  
  auth: {
      user: 'fitnessgroup69@gmail.com',
      pass: 'pogword69'
  }
}); 

const info = await transporter.sendMail({
  from: 'fitnessgroup69@gmail.com', // sender address
  to: 'gamecube756@gmail.com', // list of receivers
  subject: "Hello ", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
});*/

app.post('/login', async (req, res) => {
  try {

    const user = await userModel.findOne({ Email: req.body.Email }).exec();
    var Email = user.Email;
    var Username = user.Name;
    var loginData = JSON.parse('{"Email": "'+Email+'", "Name":"'+Username+'"}');
    
    if(!user){
      return res.status(400).send({message: "User does not exist"});
    }

    if(!Bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).send({message: "The password is invalid"});
    }

    if(user.isVerified == false)
    {
      return res.status(400).send({message: "This account is not verified"});
    }

    res.status(200).send(loginData);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/register", async (req, res) => {


  


  try {
      const Email = req.body.Email;
      //var Reset = crypto.randomBytes(16).toString('hex');
      req.body.password = Bcrypt.hashSync(req.body.password, 10);
      req.body.verifyToken = crypto.randomBytes(5).toString('hex');

      const checkUser = await userModel.findOne({ Email: req.body.Email }).exec();

      if(checkUser){
        return res.status(400).send({message: "A user with this email already exists"});
      } else{
        const user = new userModel(req.body);
        const logs = new logModel(req.body);
        const goals = new goalModel(req.body);
        var result = await user.save();
        var logRes = await logs.save();
        var goalRes = await goals.save();
  
        //var Reset = crypto.randomBytes(16).toString('hex');
  
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          
          auth: {
              user: 'fitnessgroup69@gmail.com',
              pass: 'pogword69'
          }
        }); 
        let mailOptions = {
          from: 'fitnessgroup69@gmail.com', // sender address
          to: req.body.Email, // list of receivers
          subject: "Email Verification", // Subject line
          text: "This is your verification token: " + req.body.verifyToken + "\nPlease click the link below to finish verifying your account!\n https://fitnessgroup3.herokuapp.com/confirmation", // plain text body
          //html: "<b>Hello world?</b>" // html body
        }
  
        transporter.sendMail(mailOptions, function (err) {
          if (err) {
             return res.status(500).send({ msg: err.message }); 
          }
          var msg = JSON.parse('{"msg": "A confirmation email has been sent to '+Email+'"}');
          res.status(200).send(msg);
        });
      }



      //res.send(result);
     // res.send(logRes);

     // var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
 
      // Save the verification token
      /*token.save(function (err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
 
      // Send the email
      

 
          })*/
        }
    

   catch (err) {
      res.status(500).send(err);
  }
});

/*app.post("/confirmation/:verifyToken", async(req, res) => {               //Used to confirm email verification token

  const token = req.params.verifyToken;       //Takes token from url and stores it in token variable
  const Email = req.body.Email;               //Takes email from req body and stores it
  const user = await userModel.findOne({ Email: req.body.Email }).exec();   //Searches for email in database and stores the matching user's information
  const userEmail = user.Email;
  const userToken = user.verifyToken;

  //res.send(user);
  if(Email == userEmail){

    if(token == userToken){
      user.isVerified = true;       //Updates verified flag in user
      await user.save();            //Saves info and sends back to database. 
      res.status(200).send({msg: "Verified!"});
    }

    else{
      res.status(500).send({msg: "Wrong Token!"});
    }
  }
  


});*/

app.post("/confirmation", async(req, res) => {
  const user = await userModel.findOne({ verifyToken: req.body.verifyToken}).exec();
  user.isVerified = true;
  await user.save();
  res.status(200).send({msg: "Verified!"});
});


app.post('/ResetPass', async(req, res) =>{ 

  /*var data = {
    passwordResetToken: req.body.passwordResetToken,
    password: req.body.password
  }*/

  //const user = await userModel.findOne({'passwordResetToken': req.body.passwordResetToken},{$set: data});
  const user = await userModel.findOne({"passwordResetToken": req.body.passwordResetToken}).exec();
  user.password = Bcrypt.hashSync(req.body.password, 10);
  //user.password = req.body.password;
  await user.save();

  //var msg = JSON.parse('{"msg": "Your password has been updated"}');
  try {
    var msg = JSON.parse('{"msg": "Your password has been updated"}');
    res.send(msg);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/PassResetEmail', async(req, res) => {

  const user = await userModel.findOne({ "Email": req.body.Email}).exec();
  user.passwordResetToken = crypto.randomBytes(5).toString('hex');
  await user.save();
  //res.send(user);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: 'fitnessgroup69@gmail.com',
        pass: 'pogword69'
    }
  }); 

  let mailOptions = {
    from: 'fitnessgroup69@gmail.com', // sender address
    to: req.body.Email, // list of receivers
    subject: "Password Reset", // Subject line
    text: "This is your password reset token: " + user.passwordResetToken + "\nPlease click the link below to finish resetting your password!\n https://fitnessgroup3.herokuapp.com/ResetPass", // plain text body
    //html: "<b>Hello world?</b>" // html body
  }

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
       return res.status(500).send({ msg: err.message }); 
    }
    var msg = JSON.parse('{"msg": "A confirmation email has been sent to '+ user.Email +'"}');
    res.status(200).send(msg);
    //res.send(user);
  });
  //await user.save();
});


/*app.patch('/user/:id', async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(req.params.id, req.body)
      await userModel.save()
      res.send(user)
    } catch (err) {
      res.status(500).send(err)
    }
  })*/

module.exports = app