import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Signup() {
  const [user, setUser] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const[userSignedUp,setUserSignedUp]=useState(true);


  let handleSignupBtn = (e) => {
    e.preventDefault();
    if(!user || !userPassword || !userEmail)return;

    console.log(user);
    setUser("");
    setUserEmail("");
    setUserPassword("")
  }
  return (
    <div className='form-container login'>
      <h2>Signup</h2>
      <form onSubmit={handleSignupBtn}>
        <div className="signupinput">
          <input
            type="text"
            placeholder='Enter a username'
            className='form-control'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />
        </div>
        <div className="signupinput">
        <input
            type="text"
            placeholder='Enter your Email'
            className='form-control'
            value={userEmail}
            onChange={(e)=>setUserEmail(e.target.value)}
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
          Signup
        </button>

      </form>
      <p>Already have account <Link to="/login">Login here</Link></p>
    </div>
  )
}

export default Signup