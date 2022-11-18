const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const QuizSchema = new mongoose.Schema({
  pregunta: {type: String, required:true},
  correcta: { type: String, required: true },
  mal1: { type: String, required: true },
  mal2: { type: String, required: true },
  mal3: { type: String, required: true },
  level: { type: Number},
});

const model = mongoose.model("quiz", QuizSchema);
module.exports = model;