import {isAuthenticated, signOut} from './auth_helpers.js'
import { addQuestion } from './question_helpers.js'

const user_title = document.getElementById('user_title')
const ques_text = document.getElementById('ques_text')
const ques_ans = document.getElementById('ques_ans')
const ques_error = document.getElementById('ques_error')

user_title.innerText = `Welcome ${window.sessionStorage.getItem('user')}`

if(!isAuthenticated()){
    window.location.href = 'landing.html'
}

document.getElementById('sign_out').onclick = () => {
    signOut()
    window.location.href = 'landing.html'
}

document.getElementById('add_question').onclick = () => {
    let data = {
        text : ques_text.value,
        answer : ques_ans.value
    }
    addQuestion(data).then(({err,msg}) => {
        ques_error.innerText = msg
    })
}

document.getElementById('enter_quiz').onclick = () => {
    window.location.href = 'quiz.html'
}
