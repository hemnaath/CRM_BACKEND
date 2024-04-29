const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
    date: { type: String, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    worked_hours: { type: String },
    in_time: { type: String, unique: true },
    out_time: { type: String }
});

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;
