import {React, useState} from 'react';
import './Login.css';


export default function Login() {

  const [message, setMessage] = useState('');

  const users = [
    {
      "id": 1,
      "username": "amar",
      "password": "amar123"
    },
    {
      "id": 2,
      "username": "akbar",
      "password": "akbar123"
    },
    {
      "id": 3,
      "username": "antony",
      "password": "antony123"
    },
    {
      "id": 4,
      "username": "john",
      "password": "john123"
    },
    {
      "id": 5,
      "username": "paul",
      "password": "paul123"
    }
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;

    const UserData = users.find((user) => {
      return user.username === userName
    });

    if(UserData) {
      if(UserData.password === userPassword) {
        setMessage("Successfull login");
      } else {
        setMessage("Incorrect Password")
      }
    } else {
      setMessage("Invalid User")
    }
    
  }

  return (
    <main className="main-container">
      <h1>Welcome to Dishpoll</h1>
      <div className="login-container">
        <h2 className="login-header">Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username" className="login-label">Username</label>
            <input type="text" name="username" id="username" placeholder="Username" required />
            <br />
            <label htmlFor="password" className="login-label">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" required/> <br />
            {message && (
              <p className="error"> {message} </p>
            )}
            <input type="submit" value="Login" className="login-btn" />
          </form>
      </div>
    </main>
  )
}