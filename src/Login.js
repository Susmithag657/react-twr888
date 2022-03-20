import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLockKeyHole } from '@fortawesome/free-solid-svg-icons'

//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
const Login = () => {
  const [userName,setuserName]=useState('')
  const [password,setpassword]=useState('')
  const [agree,setagree]=useState(false)
const handleSubmit=(e)=>{
e.preventDefault()
console.log(`userName :${userName} ,password :${password} ,agree :${agree}` )
}
const handleChange=(e)=>{
e.preventDefault()
const val=e.target.value;
switch(e.target.name){
  case 'userName':setuserName(val)
  case 'password':setpassword(val)
  case 'agree':setagree(val)
}
console.log(userName,password)
}
  return (
  <div className='form-container'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
      <label hmtlfor='username'>UserName</label>
      <input type='text' id='username' onChange={handleChange} name='userName' required/>
      </div>
      <div className='input-container'>
      <label htmlfor='password'>Password</label>
      <input type='password' id='password' onChange={handleChange} name='password' required/>
      </div>
      <div>
      <input type='checkbox' id='checkbox' required name='agree'/>
      <label htmlfor='checkbox'>I agree to the Terms and Conditions</label>
      </div>
      <button type='submit' >Submit</button>
      </form>
     
  </div>
  );
};
export default Login;
