const express = require("express");
const router = express.Router();
const axios = require("axios");
const quiz = require("../../models/quiz");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
router.post("/", async (req, res) => {
        try {
          //hola
            const preguntas = await quiz.create(req.body);
            preguntas.save();
            res.status(200).json(preguntas);
        } catch (error){console.log(error)}
  });

// router.get("/", async (req, res) => {
//    let denuncias = await complaint.find();
//     try {
//           res.send(denuncias);  
//     } catch (err) {
//       res.json(err);
//     }
//   });
  
router.get("/", async (req, res) => {
  let preguntas = await quiz.find();
   try {
         res.send(preguntas);  
   } catch (err) {
     res.json(err);
   }
 });

 router.get("/:level", async(req,res) => {
  try {
    quiz.find({level: req.params.level},(error, guest)=>{
          res.json(guest)
      })
  }
  catch(error) {
    console.log(error)
      res.status(500).send(error)
  }
})
  
 module.exports = router;