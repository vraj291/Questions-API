import {isAuthenticated } from './auth_helpers.js'
import { getQuestions } from "./question_helpers.js";

const quiz_ele = document.getElementById('quiz_wrapper')
const quiz_score = document.getElementById('quiz_score')

let questions = []

if(!isAuthenticated()){
    window.location.href = 'landing.html'
}

getQuestions(10).then(({err,data}) => {
    questions = data
    if(err || data.length === 0){
        quiz_ele.innerText = 'Could not any questions.'
    }else{
        data.forEach(e => {
            let wrapper = document.createElement('div')
            wrapper.className = 'question-wrapper'
            let text = document.createElement('div')
            text.className = 'question-text'
            text.innerText = e.text
            let input = document.createElement('input')
            input.className = 'question-answer'
            input.setAttribute('type','text')
            wrapper.appendChild(text)
            wrapper.appendChild(input)
            quiz_ele.appendChild(wrapper)
        })
    }
    console.log(questions)
})

document.getElementById('leave_quiz').onclick = () => {
    window.location.href = 'user.html'
}

document.getElementById('submit_quiz').onclick = () => {
    let wrappers = document.getElementsByClassName('question-wrapper')
    let answers = document.getElementsByClassName('question-answer')
    let score = 0
    for(let index in questions) {
        console.log(index)
       if(answers[index].value === questions[index].answer){
           score++
       }else{
           let past_err = wrappers[index].getElementsByClassName('question-error')
           if(past_err.length !== 0){
               past_err[0].remove()
           }
           let err = document.createElement('div')
           err.className = 'question-error'
           err.innerText = 'Wrong Answer'
           wrappers[index].appendChild(err)
       }
    }
    quiz_score.innerHTML = `Final Score = ${score}/${answers.length}`
}