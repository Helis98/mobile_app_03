const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({

    CaloriesGained: {
        type: BigInt64Array ,
        required: true
    } ,

    CaloriesBurned: {
        type: BigInt64Array ,
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