const express = require('express')
const router = express.Router()
const quesCtrl = require('../controllers/question.controller')

router.post('/addQuestion',quesCtrl.addQuestion)

router.get('/getQuestions',quesCtrl.getQuestions)

module.exports = router