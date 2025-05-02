import styles from '../style/Header.module.css';

import { List } from "@phosphor-icons/react"

export function Header({ toggleLeftBar }) {
    return (
        <>
        <header className={styles.header}>
            {/* <button className={styles.button} onClick={toggleLeftBar}><img className={styles.buttonImg} src={icoHeader} alt="" /></button> */}
            <button className={styles.button} onClick={toggleLeftBar}><List size={48} color='blue'/></button>
            <h2 className={styles.title_main}>BUG HUNTER</h2>
            <div className={styles.div_user}>
                <h4>20?</h4>
                <h4>Username</h4>
                <img src="https://img.freepik.com/vetores-premium/ilustracao-em-vetor-3d-realista-de-pessoa-ou-pessoas_156780-142.jpg" alt="" />
            </div>
        </header>
        </>
    );
}