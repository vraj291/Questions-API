const ques = document.getElementById('ques')
const ans = document.getElementById('ans')

const addQuestion = () => {
    return axios({
        method : 'post',
        url : 'http://localhost:8080/api/addQuestion',
        params : {
            text : ques.value,
            answer : ans.value
        }
    })
    .then(resp => {
        console.log(resp.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const getQuestions = () => {
    return axios({
        method : 'get',
        url : 'http://localhost:8080/api/getQuestions',
        params : {
            limit : 5
        }
    })
    .then(resp => {
        console.log(resp.data.questions)
    })
    .catch(err => {
        console.log(err)
    })
}