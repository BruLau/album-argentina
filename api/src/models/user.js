const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  userName:{type: String},
  email: { type: String, required: true },
  password: { type: String, min: 6 },
  cellPhone: { type: String },
  country: { type: String },
  picture: { type: String },
  birthDate: { type: Date },
  verified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  Visibility: { type: Boolean, default: true },
  level: { type: Number},
});


userSchema.methods.setImgUrl = function setImgUrl (filename) {
  console.log(filename)
  this.picture = "http://localhost:3001/files/uploads/" + filename
}

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


const model = mongoose.model("User", userSchema);
module.exports = model;