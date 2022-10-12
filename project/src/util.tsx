import { Bilgiler } from "./models/IUser"

export const userLoginControl = () => {
    const stBilgiler = sessionStorage.getItem('user')
    if ( stBilgiler ) {
        try {
            const bilgiler = JSON.parse(stBilgiler) as Bilgiler
            return bilgiler
        } catch (error) {
            sessionStorage.removeItem('user')
            return null
        }
        
    }else {
        return null
    }
}