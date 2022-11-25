import styles from "./../styles/Sidebar.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.buttons}>
          <BiDotsHorizontalRounded
            style={{ color: "pink" }}
          ></BiDotsHorizontalRounded>
          <div className={styles.icon}>
            <AiFillHome style={{ color: "white" }}></AiFillHome>
            <p>Home</p>
          </div>
          <div className={styles.icon}>
            <FiSearch style={{ color: "white" }}></FiSearch>
            <p>Search</p>
          </div>
          <div className={styles.icon}>
            <BiLibrary style={{ color: "white" }}></BiLibrary>
            <p>Your library</p>
          </div>
        </div>
        <div className={styles.create}>
          <div className={styles.songs}></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};
