const recordService = require('../services/recordService');

const getRecordForWorkout = (req,res)=>{
    const {
        params: { workoutId },
      } = req;
    const allRecords = recordService.getRecordForWorkout(workoutId);
    res.send({status: "OK", data: allRecords});

};

module.exports = {
    getRecordForWorkout
};