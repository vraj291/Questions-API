import { BASE_URL } from '../config.js'
import { getJWT } from './auth_helpers.js'

export const addQuestion = (data) => {
    return axios({
        method : 'post',
        url : `${BASE_URL}/addQuestion`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getJWT()}`
        },
        params : data
    }).then(resp => ({err : false,msg : resp.data.message}))
    .catch(err => {
        return ({err : true,msg : err.response.data.error})
    })
}

export const getQuestions = (limit) => {
    return axios({
        method : 'get',
        url : `${BASE_URL}/getQuestions`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getJWT()}`
        },
        params : {
            limit : limit
        }
    })
    .then(resp => ({err : false,data : resp.data.questions}))
    .catch(err => {
        console.log(err)
        return ({err : true,msg : err.response.data.error})
    })
}