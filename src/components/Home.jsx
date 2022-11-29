import styles from "./../styles/Home.module.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle} from "react-icons/ai";

export const Home = () => {
    return (
       <>
       <div className={styles.container}>
        <div className={styles.top}>
            <div>
                <AiFillLeftCircle></AiFillLeftCircle>
                <AiFillRightCircle></AiFillRightCircle>
            </div>
            <button className={styles.upgrade}>Upgrade</button>
        </div>
        <div className={styles.picture}></div>
        <div className={styles.play}></div>
        <div className={styles.songs}></div>
       </div>
       </>
    )
}