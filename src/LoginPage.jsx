import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  
  const auth = useAuth();
  const [username, setUsername] = React.useState("");
  const login =(e)=>{
    e.preventDefault();
    auth.login({username});
  }
  if (auth.user) {
    return <Navigate to='/profile'/>
  }
  return (
    <>
      <div>
      <h1>LoginPage</h1>
      <form onSubmit={login}>
        <label>Nombre de ususarioo</label>
        <input
          value={username}
          onChange={ e => setUsername(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
      </div>
      

      <div class="wrapper">
        {/* <div class="form-wrapper sign-up">
          <form action="">
            <h2>Sign Up</h2>
            <div class="input-group">
              <input type="text" required />
              <label for="">Username</label>
            </div>
            <div class="input-group">
              <input type="email" required />
              <label for="">Email</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <button type="submit" class="btn">
              Sign Up
            </button>
            <div class="sign-link">
              <p>
                Already have an account?{" "}
                <a href="#" class="signIn-link">
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div> */}

        <div class="form-wrapper sign-in">
          <form onSubmit={login} action="">
            <h2>Login</h2>
            <div class="input-group">
              <input 
                value={username}
                onChange={ e => setUsername(e.target.value)}
                type="text" required 
              />
              <label for="">Username</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <div class="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="btn">
              Login
            </button>
            <div class="sign-link">
              <p>
                Don't have an account?{" "}
                <a href="#" class="signUp-link">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export {LoginPage};
