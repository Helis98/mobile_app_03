var cron = require('node-cron');
const express = require('express');
const bodyParser = require('body-parser');
const logModel = require('../models/LogSchema');
var Request = require("request");


const app = express();

cron.schedule('59 23 * * *', () => {
  console.log('running a task every minute');
  doShit();


});
async function doShit(){
  const logs = await logModel.find({}).exec()

//  console.log(logs);
  logs.forEach(function(myDoc){
//    console.log(myDoc.Email);
    const info = {
      Email : myDoc.Email   
    }
    var data = {}
    Request.post({url :"http://fitnessgroup3.herokuapp.com/AddTempLogs", form:info}, (error, response,body)=> {
      data.status = response.statusCode;
      data.body = JSON.parse(response.body);
      console.log(data);
     // done();
  });

  });
};

module.exports = app