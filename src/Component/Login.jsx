import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext.jsx";
import toast from "react-hot-toast";

function Login() {
  const { logIn, logOut, logedInUser, isUserLogedIn, setIsUserLogedIn } =
    useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  let handleLoginBtn = (e) => {
    e.preventDefault();
    if (username && userPassword) {
      let result = logIn(username, userPassword);
      if (result) {
        toast.success("User login successfully");
        navigate("/dashboard");
      } else {
        toast.error("Invalid user");
      }
    } else {
      toast.error("Please enter valid username and password");
    }
  };

  return (
    <div className="container section" id="login">
      <h2>Login</h2>
      <form onSubmit={handleLoginBtn}>
        <div className="input">
          <input
            type="text"
            placeholder="Enter a username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button className="loginbtn">Login</button>
      </form>
      <p>
        Don't have account please <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
