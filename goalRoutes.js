const express = require('express');
const goalModel = require('../models/GoalsSchema');
const app = express();

app.get('/goals', async (req, res) => {
  const Goals = await goalModel.find({});

  try {
    res.send(Goals);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/Goals', async (req, res) => {
    const Goals = new goalModel(req.body);
  
    try {
      await Goals.save();
      res.send(Goals);
    } catch (err) {
      res.status(500).send(err);
    }
  });


module.exports = app