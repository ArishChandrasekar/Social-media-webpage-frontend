//username:arish
//password:mcu123

import React from "react";
import "./login.css";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  if (user === "arish" && password === "mcu123") {
    return <Navigate to="../homepage/Home" />;
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
          <h3 className="loginLogo">MCU</h3>
          <span className="loginDesc">
            Look at some of the famous Marvel Characters.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
              id="user"
              className="loginInput"
            />
            {user.length === 0 ? (
              <label htmlFor="user">Enter userName</label>
            ) : (
              ""
            )}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="pass"
              className="loginInput"
            />
            {password.length === 0 ? (
              <label htmlFor="pass">Enter password</label>
            ) : (
              ""
            )}
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
