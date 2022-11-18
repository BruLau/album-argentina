const express = require("express");
const router = express.Router();
const axios = require("axios");
const user = require("../../models/user");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
router.post("/", async (req, res) => {
        try {
          //hola
          console.log(req.body)
            const preguntas = await user.create(req.body);
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
    const emailSearch = req.query.email;
    alluser = await user.find();
    try {
      if (emailSearch) {
        user.find({ email: emailSearch }, (err, email) => {
          res.send(email);
        });
      } else {
        res.json(alluser);
      }
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/:email", async(req,res) => {
    try {
      console.log(req.params.email)
      user.find({email: req.params.email},(error, guest)=>{
            res.json(guest)
        })
    }
    catch(error) {
      console.log(error)
        res.status(500).send(error)
    }
  })
  
 module.exports = router;