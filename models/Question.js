const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    text : {
        type : String,
        trim : true,
        required : 'Question not defined.'
    },
    answer : {
        type : String,
        trim : true,
        required : 'Answer not defined.'
    }
})

module.exports = mongoose.model('Question',QuestionSchema)