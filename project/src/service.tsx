import axios from "axios";
import { IProduct } from "./models/IProduct";
import { IUser } from "./models/IUser";

let baseURL = 'https://www.jsonbulut.com/json/'
let ref = 'd1becef32825e5c8b0fc1b096230400b'
baseURL = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL: baseURL
ref = process.env.REACT_APP_REF ? process.env.REACT_APP_REF : ref
export const config = axios.create({
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
    return config.get<IUser>('userLogin.php', { params: sendParams })
}

// all product
export const allProduct = () => {
    const sendParams = {
        start: '0'
    }
    return config.get<IProduct>('product.php', { params: sendParams })
}