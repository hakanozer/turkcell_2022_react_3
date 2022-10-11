import axios from "axios";

let baseURL = 'https://www.jsonbulut.com/json/'
let ref = 'd1becef32825e5c8b0fc1b096230400b'
baseURL = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL: baseURL
ref = process.env.REACT_APP_REF ? process.env.REACT_APP_REF : ref
const config = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    params: { ref: ref },
    //headers: { 'Authorization' : 'Bearer '+jwt }
})

// User Login
export const userLogin = ( email:string, password: string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: 'no'
    }
    return config.get('userLogin.php', { params: sendParams })
}