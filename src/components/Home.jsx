import styles from "../styles/Main.module.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.png";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";

import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl =
  "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/10/playlists";

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
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
        <div className={styles.cont}>
          <div className={styles.header}>
            <div className={styles.top}>
              <div>
                <AiFillLeftCircle
                  style={{ width: 30, height: 30 }}
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
          </div>
          <div className={styles.toppart}>
            <h2 className={styles.afternoon}>Good Afternoon</h2>
            <div className={styles.boxes}>
              <div className={styles.upper}>
                <div className={styles.box}>
                  <img src={img1} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[0].listName}</h4>
                </div>
                <div className={styles.box}>
                  <img src={img2} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[1].listName}</h4>
                </div>
                <div className={styles.box}>
                  <img src={img3} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[2].listName}</h4>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.box}>
                  <img src={img4} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[3].listName}</h4>
                </div>
                <div className={styles.box}>
                  <img src={img5} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[4].listName}</h4>
                </div>
                <div className={styles.box}>
                  <img src={img6} style={{ width: 80, height: 80 }}></img>
                  <h4 style={{ color: "#eee" }}>{data && data[0].listName}</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.afternoon}>Jump back in</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={img7} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[0].listName}</h4>
                <h4>by {data && data[0].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img8} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[1].listName}</h4>
                <h4>by {data && data[1].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img12} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[2].listName}</h4>
                <h4>by {data && data[2].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img10} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[3].listName}</h4>
                <h4>by {data && data[3].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img11} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[4].listName}</h4>
                <h4>by {data && data[4].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img9} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[0].listName}</h4>
                <h4>by {data && data[0].userId.name}</h4>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.afternoon}>Recommended Radio</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={img13} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[0].listName}</h4>
                <h4>by {data && data[0].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img14} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[1].listName}</h4>
                <h4>by {data && data[1].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img15} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[2].listName}</h4>
                <h4>by {data && data[2].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img16} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[3].listName}</h4>
                <h4>by {data && data[3].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img17} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[4].listName}</h4>
                <h4>by {data && data[4].userId.name}</h4>
              </div>
              <div className={styles.card}>
                <img src={img18} style={{ width: 200, borderRadius: 5 }}></img>
                <h4 className={styles.text1}>{data && data[0].listName}</h4>
                <h4>by {data && data[0].userId.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
