import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from './service'
import { encrypt } from './util'

function Login() {

  const navigate = useNavigate()  
  const [alertMessage, setAlertMessage] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const sendForm = ( evt: React.FormEvent ) => {
    evt.preventDefault()
    setAlertMessage('')
    userLogin(email, password).then( res => {
        const user = res.data.user[0]
        const bilgi = user.bilgiler
        if ( user.durum && bilgi ) {
            const stBilgiler = JSON.stringify(bilgi)
            const encryptBilgiler = encrypt(stBilgiler)
            sessionStorage.setItem('user', encryptBilgiler)
            navigate('/dashboard')
        }else {
            setAlertMessage( user.mesaj )
        }
    }).catch( error => {
        console.log( error.message );
    }).finally(() => {
        console.log("Service Call Finish");
    })
    console.log("this line call");
    
  }  

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2> Admin Login </h2>

                { alertMessage !== '' && 
                    <div className="alert alert-danger" role="alert">
                        { alertMessage }
                    </div>
                }

                <form onSubmit={sendForm}>
                    <div className='mb-3'>
                        <input onChange={(evt) => setEmail(evt.target.value)} required type='email' className='form-control' placeholder='E-Mail'></input>
                    </div>
                    <div className='mb-3'>
                        <input onChange={(evt) => setPassword(evt.target.value)} required type='password' className='form-control' placeholder='Password'></input>
                    </div>
                    <button type='submit' className='btn btn-success'>Login</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login