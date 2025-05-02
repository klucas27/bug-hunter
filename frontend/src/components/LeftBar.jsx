import { Link } from "react-router-dom";
import styles from "../style/LeftBar.module.css";

export function LeftBar() {
    return (
        <>
        <aside className={styles.asideBar}>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><Link to="/">Home</Link></li>
                    <li className={styles.menuItem}><Link to="/game">Game</Link></li>
                    <li className={styles.menuItem}><Link to="/aprendizado-ia">Aprendizado com IA</Link></li>
                    <li className={styles.menuItem}><Link to="/conceitos">Conceitos</Link></li>
                    <li className={styles.menuItem}><Link to="/feedbacks">Feedbacks</Link></li>
                </ul>
            </nav>
        </aside>
        </>
    );
}