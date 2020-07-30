const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/UserSchema');
const logModel = require('../models/LogSchema');
const goalModel = require('../models/GoalsSchema');
const bodyParser = require('body-parser');
const cors = require('cors');
var Request = require("request");

const userFuncs = require('../routes/userRoutes');

const app = express();
const crypto = require('crypto');
const Jasmine = require('jasmine');



describe("Create a user", function () {

    const data = {
        Email: 'poggers@pogger.com',
        password: 'password',
        Name: 'Name'
        //  const verifyToken = crypto.randomBytes(5).toString('hex');
    }
    var Email = 'poggers@pogger.com'


    it('Should create a new user', async function () {
        const pogs = JSON.parse(JSON.stringify(data));
        const user = await new userModel(pogs);
        user.save();

        expect(user.Email).toBe(Email);
        expect(user.password).toBe('password');
        expect(user.Name).toBe('Name');
    })
});


describe("Check for incorrect password", function () {


    var data = {};
    beforeAll((done) => {
        const info = {
            Email: 'gamecube756@gmail.com',
            password: 'pass'
        }

        var loginData = JSON.parse(JSON.stringify(info));
        console.log(loginData);
        Request.post({ url: "http://fitnessgroup3.herokuapp.com/login", form: info }, (error, response, body) => {
            data.status = response.statusCode;
            data.body = JSON.parse(response.body);
            console.log(data);
            done();
        });
    });

    it("Check for status", async function () {
        expect(data.status).toBe(400);
    });
    it("", async function () {
        expect(data.body).toEqual({ message: "The password is invalid" });
    })

});

describe("Checks logs ", function () {
    var data = {};
    const info = {
        Email : 'gamecube756@gmail.com'
    }
    Request.post({ url: "http://fitnessgroup3.herokuapp.com/GetLogs", form : info}, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(response.body);
        console.log(data);
 
    })



})

describe("pogchamp", function(){
    const newInfo = {
        Email : 'gamecube756@gmail.com',
        CaloriesGained :600,
        CaloriesBurned :600
    }
    var newData = {}
    beforeAll((done) => {
    Request.post({ url: "http://fitnessgroup3.herokuapp.com/AddLogs", form : newInfo}, (error, response, body) => {
        newData.status = response.statusCode;
        newData.body = JSON.parse(response.body);
        console.log(newData);
        done();
    })
})
    it("Checks logs to be added to temp", async function(){
        expect(newData.body.msg).toEqual( 'Log has been added' );
    })
})

describe("Goals", function(){
    var data = {};
    const info = {
        Email : 'gamecube756@gmail.com'
    }


    beforeAll((done) => {    
        Request.post({ url: "http://fitnessgroup3.herokuapp.com/GetGoals", form : info}, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(response.body);
        console.log(data);
        done();
    })})
    it("Makes sure greater then 0",  function(){
        expect(data.body.CaloriesGainGoal).toBeGreaterThanOrEqual(0);
    })

    it("Checks status goal", function(){
        expect(data.status).toBe(200);
    })


})
