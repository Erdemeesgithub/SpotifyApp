import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import styles from "../styles/Login.module.css";

export const Logout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logget out");
      }
    });
  }, []);

  const Logout = () => {
    signOut(auth);
    if (signOut === true) {
      return <button>Log in</button>;
    } else {
      return <button>Log out</button>;
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          Welcome to Home page
          {user && <p>{user.email}</p>}
          <div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={Logout}>{}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
