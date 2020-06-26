const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({

    CaloriesGainGoal: {
        type: BigInt64Array ,
        required: true
    } ,

    CaloriesBurnGoal: {
        type: BigInt64Array ,
        required: true
    }
});

const Goals = mongoose.model("Goals", goalSchema);
module.exports = Goals;