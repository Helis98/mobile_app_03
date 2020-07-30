const mongoose = require('mongoose');

const allLogsSchema = new mongoose.Schema({

    CaloriesGained: {
        type: Number,
        required: true,
        default: 0
    } ,

    CaloriesBurned: {
        type: Number ,
        required: true,
        default : 0
    } ,

    DateCreation: {
        type: Date ,
        default: Date.now ,
        required: true
    }

})

const UserlogSchema = new mongoose.Schema({

    Email : String, //use Email to tie logs to who they belong too
    TempGained: {
        type: Number,
        //required: true,
        default: 0
    },
    TempBurned: {
        type: Number,
        //required: true,
        default: 0
    },
    logs : [allLogsSchema] //this allows the log file to have sub logs

});



const Logs = mongoose.model("Logs", UserlogSchema);
//const UserLogs = mongoose.model("UserLogs", UserlogSchema);
module.exports = Logs;