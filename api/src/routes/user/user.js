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

  // router.patch("/:_id", async (req, res) => {
  //   try {
  //     console.log(req.body)
  // await user.findByIdAndUpdate(req.params._id, (req.body.level + 1));
  // res.send("actualizado con exito")
  // } catch (error) {
  // res.status(400).send("no se pudo actualizar el usuario");
  // console.log(error);
  // }
  // })
  
  router.patch("/:_id", async (req, res) => {

    user.find({_id: req.params._id},(error, guest)=>{
      console.log(guest[0].level)
    user.findByIdAndUpdate(req.params._id, { level: guest[0].level + 1 },
                                function (err, docs) {
        if (err){
            console.log(err)
            res.status(400).send("no se pudo actualizar el usuario");
        }
        else{
            console.log("Updated User : ", docs);
            res.send("actualizado con exito")
        }
    });})
    })
 module.exports = router;