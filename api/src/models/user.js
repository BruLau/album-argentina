const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  userName:{type: String},
  email: { type: String, required: true },
  password: { type: String, min: 6 },
  verified: { type: Boolean, default: false },
  premium: { type: Boolean, default: false },
  Visibility: { type: Boolean, default: true },
  level: { type: Number, default: 0},
  puntaje: { type: Number, default: 0},
});


// Para encriptar el password (antes del save) (bcrypt , salt y hash)
userSchema.pre("save", async function(next) {
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)

})

// Cuando haces login y haga match con la contraseña

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword , this.password)
};


const model = mongoose.model("user", userSchema);
module.exports = model;