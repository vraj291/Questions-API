import { BASE_URL } from '../config.js'
import {loginUser} from './auth_helpers.js'

const login_user = document.getElementById('login_user')
const login_pass = document.getElementById('login_pass')
const login_error = document.getElementById('login_error')

let url = window.location.href
console.log(url)
if (url.substring(url.indexOf('?')+1,url.indexOf('=')) === 'error'){
    login_error.innerText = decodeURIComponent(url.slice(url.indexOf('=')+1))
}else if (url.substring(url.indexOf('?')+1,url.indexOf('=')) === 'token'){
    setJWT(url.substring(url.indexOf('=')+1,url.indexOf('&')))
    window.sessionStorage.setItem('user',url.slice(url.lastIndexOf('=')+1))
    window.location.href = 'user.html'
}

document.getElementById('login_submit').onclick = () => {
    if(login_user.value === '' || login_pass.value === ''){
        login_user.value = ''
        login_pass.value = ''
        login_error.innerHTML = 'A required field was not filled.'
    }else{
        let data = {
            user : login_user.value,
            password : login_pass.value
        }
        loginUser(data).then(({err,msg})=>{
            if(err){
                login_user.value = ''
                login_pass.value = ''
                login_error.innerHTML = msg
            }else{
                window.sessionStorage.setItem('user',login_user.value)
                window.location.href = 'user.html'
            }
        })
    }
}

document.getElementById('login_google').onclick = () => {
    window.location.href = `${BASE_URL}/googleSigninURL`
}

document.getElementById('login_github').onclick = () => {
    window.location.href = `${BASE_URL}/githubSigninURL`
}