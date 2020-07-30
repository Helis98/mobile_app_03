const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },

    CaloriesGainGoal: {
        type: Number ,
        required: true,
        default: 0
    } ,

    CaloriesBurnGoal: {
        type: Number ,
        required: true,
        default: 0
    }
});

const Goals = mongoose.model("Goals", goalSchema);
module.exports = Goals;