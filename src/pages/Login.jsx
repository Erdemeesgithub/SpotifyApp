import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import styles from "../styles/Login.module.css";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseurl = "http://localhost:1111/"

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user1 = userCredential.user;
        console.log(user1);
          navigate("/home");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.container}>
          <div>
            <h1>Focus App</h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                ></input>
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" onClick={onLogin}>
                Log in
              </button>
            </form>
            <p>
              No account? <NavLink to="/signup">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
