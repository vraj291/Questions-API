const Question = require('../models/Question')

const addQuestion = async (req,res) => {
    try{
        const temp_question = new Question(req.query)
        await temp_question.save()
        res.status(200).json({
            message : 'Added question successfully.',
            id : temp_question._id
        })
    }
    catch(err){
        res.status(400).json({
            error : 'Could not add question.'
        })
    }
}

const getQuestions = async (req,res) => {
    const limit = req.query.limit || 10
    try{
        Question.find().limit(Number(limit))
        .then((questions) => {
            if(!questions){
                res.status(400).json({
                    error : 'Could not get questions.'
                })
            }else{
                res.status(200).json({
                    questions : questions
                })
            }
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            error : 'Could not get questions.'
        })
    }
}

module.exports = {addQuestion,getQuestions}