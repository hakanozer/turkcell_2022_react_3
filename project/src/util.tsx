import { Bilgiler } from "./models/IUser"
import * as CryptoJS from 'crypto-js'

const secretKey = process.env.REACT_APP_SECRET_KEY ? process.env.REACT_APP_SECRET_KEY : '12345'
export const encrypt = ( plainText: string ) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString()
    return cipherText
}

export const decrypt = ( cipherText:string ) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey )
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}

export const userLoginControl = () => {
    const stBilgiler = sessionStorage.getItem('user')
    if ( stBilgiler ) {
        try {
            const decryptBilgiler = decrypt(stBilgiler)
            const bilgiler = JSON.parse(decryptBilgiler) as Bilgiler
            return bilgiler
        } catch (error) {
            sessionStorage.removeItem('user')
            return null
        }
        
    }else {
        return null
    }
}