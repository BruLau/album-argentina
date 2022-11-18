const express = require("express");
const router = express.Router();
const user = require("../../models/user");


router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const usuario = await user.findOne({ email });
 console.log(usuario)
  if(usuario && (await usuario.matchPassword(password))) {
    res.json({
      _id: usuario._id,
      userName: usuario.userName,
      puntaje: usuario.puntaje,
      level: usuario.level,
      email: usuario.email,
    })
  } else {
    res.status(400).send("Invalid email or password");
  }
})






module.exports = router