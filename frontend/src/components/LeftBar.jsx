import styles from "../style/LeftBar.module.css"

export function LeftBar() {
    return (
        <>
        <aside className={styles.asideBar}>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><button>Home</button></li>
                    <li className={styles.menuItem}><button>Game</button></li>
                    <li className={styles.menuItem}><button>Aprendizado com IA</button></li>
                    <li className={styles.menuItem}><button>Conceitos</button></li>
                    <li className={styles.menuItem}><button>Feedbacks</button></li>
                </ul>
            </nav>
        </aside>
        </>
    )
}