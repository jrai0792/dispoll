import React from 'react';
import './Login.css';
export default function Login() {


  return (
    <main className="main-container">
      <h1>Welcome to Dishpoll</h1>
      <div className="login-container">
        <h2 className="login-header">Login</h2>
          <label for="username" className="login-label">Username</label>
          <input type="text" name="username" id="username" placeholder="Username"/> <br />
          <label for="password" className="login-label">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" /> <br />
          <input type="submit" value="Login" className="login-btn"/>
      </div>
    </main>
  )
}