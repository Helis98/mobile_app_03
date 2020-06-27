const express = require('express');
const logsModel = require('../models/LogSchema');
const app = express();

app.get('/Logs', async (req, res) => {
  const Logs = await logsModel.find({});

  try {
    res.send(Logs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/Logs', async (req, res) => {
    const Logs = new logsModel(req.body);
  
    try {
      await Logs.save();
      res.send(Logs);
    } catch (err) {
      res.status(500).send(err);
    }
  });


module.exports = app