

var mongoose = require("mongoose");

var registrantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true }
}),

var accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  registrants: [registrantSchema]
});

mongoose.model("Account", accountSchema, "accounts");