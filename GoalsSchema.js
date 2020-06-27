const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({

    CaloriesGainGoal: {
        type: Number ,
        required: true
    } ,

    CaloriesBurnGoal: {
        type: Number ,
        required: true
    }
});

const Goals = mongoose.model("Goals", goalSchema);
module.exports = Goals;