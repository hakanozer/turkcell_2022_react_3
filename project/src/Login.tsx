import React, { useState } from 'react'
import { userLogin } from './service'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const sendForm = ( evt: React.FormEvent ) => {
    evt.preventDefault()
    userLogin(email, password).then( res => {
        console.log( res.data );
    })
  }  

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2> Admin Login </h2>
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