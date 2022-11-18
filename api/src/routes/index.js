const { Router } = require('express');
const router = Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({ extended: true }))

// const user= require('../routes/user/user')
const quiz = require('../routes/quiz/quiz')
const user = require('../routes/user/user')
const loginRoute = require ('../routes/login/login');
router.use("/api/user", user);
router.use("/api/quiz", quiz);
router.use("/api/login", loginRoute); 
module.exports = router;