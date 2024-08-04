import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext.jsx';
function Login() {
  const {  logIn, logOut,logedInUser,isUserLogedIn,setIsUserLogedIn} = useContext(LoginContext)
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  let handleLoginBtn = (e) => {
    e.preventDefault();
    if (!username || !userPassword) return;
    logIn(username,userPassword);
    console.log(username);
    setIsUserLogedIn(true)
    setUsername("");
    setUserPassword("")
  }
  return (
    <div className='form-container login'>
    {isUserLogedIn && <Navigate to="/home" replace={true}/>}
      
      <h2>Login</h2>
      <form onSubmit={handleLoginBtn}>
        <div className="input">
          <input
            type="text"
            placeholder='Enter a username'
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type="password"
            placeholder='Enter your password'
            className='form-control'
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button className='loginbtn'>
          Login
        </button>

      </form>
      <p>Don't have account please <Link to="/signup">Signup</Link></p>
    </div>
  )
}

export default Login