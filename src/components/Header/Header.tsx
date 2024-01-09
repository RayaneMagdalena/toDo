import styles from "./Header.module.css";
import rocket from "../../assets/rocket.svg"

export function Header() {
    return(
        <div className={styles.header}>
            <img src={ rocket } alt="" className={styles.logo} />
            <h1 className={styles.title}>to<span className={styles.do}>do</span></h1>
        </div>
    )
}