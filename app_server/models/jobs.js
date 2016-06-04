

var mongoose = require("mongoose");

var schema = mongoose.Schema;

var jobSchema = new mongoose.Schema({
	jobName: { type: String, required: true },
	startTime: { type: String, required: true },
	endTime: { type: String, required: true },
	jobDescription: { type: String, required: true },
	owner: { type: schema.ObjectId }
});

mongoose.model("Job", jobSchema, "jobs");