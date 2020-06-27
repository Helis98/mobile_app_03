const express = require('express');
const userModel = require('../models/UserSchema');
const app = express();

app.get('/user', async (req, res) => {
  const user = await userModel.find({});

  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/user', async (req, res) => {
    const user = new userModel(req.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.patch('/user/:id', async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(req.params.id, req.body)
      await userModel.save()
      res.send(user)
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app