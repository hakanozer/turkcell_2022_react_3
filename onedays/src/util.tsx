export function profileControl() {
    console.log("profileControl Call");
}

export const userPasswordValid = ( id:number, oldPassword:any, newPassword?:string ) => {
    if ( id === 100 || id === 55 ) {
        return "qawsed"
    }
    if ( newPassword ) {
        const password = newPassword +  '12345'
        return password
    } 

    console.log( typeof oldPassword );
    if ( oldPassword === 1212 ) {
        return "a1212a"
    }
    return null 
}

const appTitle = 'App Title'
export default appTitle

