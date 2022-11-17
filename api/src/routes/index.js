const { Router } = require('express');
const router = Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({ extended: true }))

// const user= require('../routes/user/user')
const quiz = require('../routes/quiz/quiz')
// router.use("/api/passwordReset", passwordReset);
router.use("/api/quiz", quiz);

module.exports = router;