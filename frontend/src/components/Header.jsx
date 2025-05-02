import styles from '../style/Header.module.css'

export function Header() {

    return (
        <>
        <header className={styles.header}>
            <button className={styles.button}>=</button>
            <h2 className={styles.title_main}>BUG HUNTER</h2>
            <div className={styles.div_user}>
                <h4>20?</h4>
                <h4>Username</h4>
                <img src="#" alt="" />
            </div>
        </header>
        </>
    )
}