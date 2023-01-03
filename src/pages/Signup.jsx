import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import styles from "../styles/Signup.module.css"

export const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });;
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
              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>
            <p>
              Already have an account? <NavLink to="/login">Log in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
