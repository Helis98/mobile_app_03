const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({

    CaloriesGained: {
        type: Number,
        required: true
    } ,

    CaloriesBurned: {
        type: Number ,
        required: true
    } ,

    DateCreation: {
        type: Date ,
        default: Date.now ,
        required: true
    }
});

const Logs = mongoose.model("Logs", logSchema);
module.exports = Logs;