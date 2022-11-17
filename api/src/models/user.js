const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  userName:{type: String},
  email: { type: String, required: true },
  password: { type: String, min: 6 },
  verified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  Visibility: { type: Boolean, default: true },
  level: { type: Number},
});


// Cuando haces login y haga match con la contraseña

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword , this.password)
};


const model = mongoose.model("User", userSchema);
module.exports = model;