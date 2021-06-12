import { BASE_URL } from '../config.js'

export const isAuthenticated = () => {
    if (typeof window == "undefined")
        return false
    if (sessionStorage.getItem('jwt'))
        return true
    else
        return false
}

export const setJWT = (token) => {
    if(typeof window !== "undefined")
        sessionStorage.setItem('jwt', JSON.stringify(token))
}

export const getJWT = () => {
    if(sessionStorage.getItem('jwt'))
        return JSON.parse(sessionStorage.getItem('jwt'))
}

export const signOut = () => {
    if(typeof window !== "undefined"){
        sessionStorage.removeItem('jwt')
        sessionStorage.removeItem('user')
    }
}

export const registerUser = (data) => {
    return axios({
        method : 'post',
        url : `${BASE_URL}/register`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params : data
    }).then(resp => ({err : false,msg : resp.data.message}))
    .catch(err => ({err : true,msg : err.response.data.error}))
}

export const loginUser = (data) => {
    return axios({
        method : 'post',
        url : `${BASE_URL}/login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params : data
    }).then(resp => {
        if(resp.data.auth){
            setJWT(resp.data.token)
        }
        return {err : false,msg : resp.data.message}
    })
    .catch(err => ({err : true,msg : err.response.data.error}))
}

export const changePassword = (data) => {
    return axios({
        method : 'post',
        url : `${BASE_URL}/requestPasswordChange`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params : data
    }).then(resp => ({err : false,msg : resp.data.message}))
    .catch(err => ({err : true,msg : err.response.data.error}))
}

export const updatePassword = (data) => {
    return axios({
        method : 'post',
        url : `${BASE_URL}/resetPassword`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params : data
    }).then(resp => ({err : false,msg : resp.data.message}))
    .catch(err => ({err : true,msg : err.response.data.error}))
}