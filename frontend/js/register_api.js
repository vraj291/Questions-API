import {registerUser} from './auth_helpers.js'

const reg_user = document.getElementById('reg_user')
const reg_pass = document.getElementById('reg_pass')
const reg_email = document.getElementById('reg_email')
const reg_con_pass = document.getElementById('reg_con_pass')
const reg_error = document.getElementById('reg_error')

document.getElementById('reg_submit').onclick = () => {
    if(reg_user.value === '' || reg_email.value === '' || reg_pass.value === ''){
        reg_error.innerHTML = 'A required field was not filled.'
    }else if(reg_pass.value !== reg_con_pass.value){
        reg_error.innerHTML = 'Passwords do not match.'
    }else{
        let data = {
            user : reg_user.value,
            email : reg_email.value,
            password : reg_pass.value
        }
        registerUser(data).then(({err,msg})=>{
            if(err){
                reg_user.value = ''
                reg_email.value = ''
                reg_pass.value = ''
                reg_con_pass = ''
                reg_error.innerHTML = msg
            }else{
                window.location.href = 'login.html'
                alert('User Successfully registered.')
            }
        })
    }
}


