import styles from "./../styles/Sidebar.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiHeartSquare } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.buttons}>
          <BiDotsHorizontalRounded
            style={{ color: "#eee", width: 30, height: 30 }}
          ></BiDotsHorizontalRounded>
          <div className={styles.icon}>
            <AiFillHome
              style={{ color: "white", width: 30, height: 30 }}
            ></AiFillHome>
            <p>Home</p>
          </div>
          <div className={styles.icon}>
            <FiSearch
              style={{ color: "white", width: 30, height: 30 }}
            ></FiSearch>
            <p>Search</p>
          </div>
          <div className={styles.icon}>
            <BiLibrary
              style={{ color: "white", width: 30, height: 30 }}
            ></BiLibrary>
            <p>Your library</p>
          </div>
        </div>
        <div className={styles.create}>
          <div className={styles.icon}>
            <AiFillPlusSquare
              style={{ color: "white", width: 30, height: 30 }}
              className={styles.icon1}
            ></AiFillPlusSquare>
            <p>Create a playlist</p>
          </div>
          <div className={styles.icon}>
            <BiHeartSquare
              style={{ color: "white", width: 30, height: 30 }}
            ></BiHeartSquare>
            <p>Liked songs</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>My Playlist #1</p>
        <p>My Playlist #2</p>
        <p>My Playlist #3</p>
        <p>My Playlist #4</p>
        <p>My Playlist #5</p>
        <p>My Playlist #6</p>
        <p>My Playlist #7</p>
      </div>
    </div>
  );
};
