import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";

export const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
        navigate("/")
        console.log("Signed out successfully");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        if(user) {
            setUser(user)
            const uid = user.uid
            console.log("uid", uid);
        } else {
            console.log("user is logget out");
        }
    })
  }, [])
  return (
    <div>
        Welcome to Home page
        {user && <p>{user.email}</p>}
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
};
