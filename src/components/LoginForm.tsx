import React from 'react'

function LoginForm() {
  return (
    <form>
        <input 
            name='email' 
            type="email"  
            className='login-input-form'/>
        <label htmlFor="email">Email</label>
        <input 
            name='password' 
            type="password"  
            className='login-input-form'/>
        <label htmlFor="password">Password</label>
        
        <button>Connect to Wallet</button>
    </form>
  )
}

export default LoginForm;