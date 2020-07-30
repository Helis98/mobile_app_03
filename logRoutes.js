const express = require('express');
const logsModel = require('../models/LogSchema');
const bodyParser = require('body-parser');
const app = express();

app.post('/GetLogs', async (req, res) => {
  const Logs = await logsModel.findOne({Email: req.body.Email}).exec();
  //var loginData = JSON.parse('{"Email": "'+Logs.Email+'","TempGained":"'+Logs.TempGained+'","TempBurned": "'+Logs.TempBurned+'", "Logs":"'+Logs.logs+'"}');
  result = JSON.parse(JSON.stringify(Logs));

  try {
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/AddLogs', async (req,res) =>{ //ADDS TO TEMP

  //var logsAdd = {"CaloriesGained": req.body.CaloriesGained, "CaloriesBurned": req.body.CaloriesBurned};

  //const user = await logsModel.findOne({ Email: req.body.Email }).exec();


  const user = await logsModel.findOneAndUpdate(
    {Email: req.body.Email},
    {$inc:{TempGained: req.body.CaloriesGained * .5, TempBurned: req.body.CaloriesBurned * .5}},
    function(error, success){
      if(error){
        var msg = JSON.parse('{"msg": "Log can not added"}');
        return res.status(500).send(msg); 
      }else{
        var msg = JSON.parse('{"msg": "Log has been added"}');
        res.status(200).send(msg);
      }
    }
  ).exec();
 
  
    }
    
);

app.post('/AddTempLogs', async (req,res) =>{ //WILL ADD THE TEMPS INTO THE ARRAY

  var logsAdd = {"CaloriesGained": req.body.CaloriesGained, "CaloriesBurned": req.body.CaloriesBurned};

  const user = await logsModel.findOne({ Email: req.body.Email }).exec();
  var tempGain = user.TempGained;
  var tempBurn = user.TempBurned;

  user.update(
    {
      $push: {
        "logs": {
          "CaloriesGained": tempGain,
          "CaloriesBurned": tempBurn
        }
      },
      $set:{
        "TempGained" : 0,
        "TempBurned" : 0
      }
    }, function (error, success) {
      if (error) {
        return res.status(500).send({ msg: err.message });
      } else {
        var msg = JSON.parse('{"msg": "Log has been added"}');
        res.status(200).send(msg);
      }
    }
  )
  
    }
    
);



app.post('/Logs', async (req, res) => {
    const Logs = new logsModel(req.body);
  
    try {
      await Logs.save();
      res.status(200).send(Logs);
    } catch (err) {
      res.status(500).send(err);
    }
  });


module.exports = app