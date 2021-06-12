const express = require('express')
const passport= require('passport')
const router = express.Router()
const quesCtrl = require('../controller/question.controller')
const isAdmin = require('../utils/checkRoles')

router.post(
    '/addQuestion',
    passport.authenticate('admin', {session : false}),
    quesCtrl.addQuestion
)

router.get(
    '/getQuestions',
    passport.authenticate('jwt', {session : false}),
    quesCtrl.getQuestions
)

module.exports = router