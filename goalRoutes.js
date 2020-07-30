const express = require('express');
const goalModel = require('../models/GoalsSchema');
const bodyParser = require('body-parser');
const app = express();


app.post('/GetGoals', async (req, res) => {
  const Goals = await goalModel.findOne({ Email: req.body.Email }).exec();
  var email = Goals.Email;
  console.log(email);
  var gained = Goals.CaloriesGainGoal;
  var burned = Goals.CaloriesBurnGoal;
  result = JSON.parse(JSON.stringify(Goals));

  try {
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/Goals', async (req, res) => {
    const Goals = new goalModel(req.body);
  
    try {
      await Goals.save();
      res.status(200).send(Goals);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/UpdateGoal', async(req, res) =>{ 

    var data ={
      Email: req.body.Email,
      CaloriesGainGoal: req.body.CaloriesGainGoal,
      CaloriesBurnGoal: req.body.CaloriesBurnGoal
    }

    const Goals = await goalModel.update({'Email': req.body.Email},{$set: data});
    //const Goals = await goalModel.find({Email: req.body.Email});
    var msg = JSON.parse('{"msg": "Your goal has been updated"}');
    try {
      res.status(200).send(msg);
    } catch (err) {
      res.status(500).send(err);
    }
  })


module.exports = app