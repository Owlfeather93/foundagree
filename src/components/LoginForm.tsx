import React from 'react'

function LoginForm() {
  return (
    <form>
        <label htmlFor="email" className='label-login'>Email</label>
        <input 
            name='email' 
            type="email"  
            className='login-input-form'/>

        <label htmlFor="password" className='label-login'>Password</label>
        <input 
            name='password' 
            type="password"  
            className='login-input-form'/>
            
        <button className='login-button'>Connect to Wallet</button>
    </form>
  )
}

export default LoginForm;