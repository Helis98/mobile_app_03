const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://chad:chad@cluster0-ngfs4.mongodb.net/Project?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });