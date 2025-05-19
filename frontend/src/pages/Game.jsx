import styles from '../style/pageGame.module.css';

import {TextsCods} from '../components/TextsCods.jsx'

export function Game() {
  
  return (
    <div className="container">
      <div className={styles.game}>
        <div className={styles.areaCode}>
          <TextsCods 
          className={styles.textsCods}
          />
        </div>

        <div className={styles.buttonsGame}>
          <button className={styles.button}>'Corrigir!'</button>
          <button className={styles.button}>
            Novo Bug
          </button>
        </div>
      </div>
    </div>
  );
}
