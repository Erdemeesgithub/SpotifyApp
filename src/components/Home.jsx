import styles from "./../styles/Home.module.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import pic from "../assets/9d5bd05956d175dc3e4ff993e2bface9.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillPlayCircle } from "react-icons/ai";

const baseUrl =
  "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/10/playlists";

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        baseUrl
        //   + "user?limit=9", {
        //   headers: {
        //     "app-id": "636f2f24e8d0ffd9c83fc52f",
        //   },
        // }
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.top}>
            <div>
              <AiFillLeftCircle
                style={{ width: 30, height: 30}}
              ></AiFillLeftCircle>
              <AiFillRightCircle
                style={{ width: 30, height: 30 }}
              ></AiFillRightCircle>
            </div>
            <div className={styles.buttonTop}>
              <button className={styles.upgrade}>Upgrade</button>
              <p className={styles.account}>Your account</p>
            </div>
          </div>
          <div className={styles.picture}>
            <img src={pic} className={styles.pic}></img>
            <div>
              <p className={styles.public}>Public playlist</p>
              <p className={styles.playlistName}>
                We have the same music taste.
              </p>
              <div className={styles.tag}>
                <p style={{ color: "#eee" }}>Mayonnaise.</p>
                <p style={{ color: "#eee" }}>• 20 Songs,</p>
                <p style={{ color: "gray" }}>1 hr 30 </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.play}>
            <AiFillPlayCircle style={{ width: 50, height: 50, color:"#1ed760"}}></AiFillPlayCircle>
          </div>
          <div className={styles.songs}></div>
        </div>
      </div>
    </>
  );
};
