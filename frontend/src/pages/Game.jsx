import { Password } from '@phosphor-icons/react';
import { TextsCods } from '../components/TextsCods';
import { useState } from 'react';

import styles from '../style/pageGame.module.css';

export function Game() {
  const [codigoUsuario, setCodigoUsuario] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [visivel, setVisivel] = useState(false);

  const verTask = () => {
    try {
      // Avalia o código digitado pelo usuário
      const func = new Function(codigoUsuario);
      func(); // Executa o código para verificar se é válido

      if (codigoUsuario.trim() === "console.log('123')") {
        setMensagem("Parabéns! Você acertou!");
      } else {
        setMensagem('Infelizmente você errou! Vamos para o próximo!');
      }
    } catch {
      setMensagem('Erro no código! Verifique a sintaxe.');
    }

    setVisivel(true);
    setTimeout(() => setVisivel(false), 1300);
  };

  return (
    <div className="container">
      <div className={styles.game}>
        <div className={styles.areaCode}>
          <TextsCods
            className={styles.textsCods}
            codigo="console.log('123')"
            onChange={setCodigoUsuario} // Recebe código digitado
          />
        </div>

        {visivel && (
          <div className={styles.mensageForUser}>
            <h3>{mensagem}</h3>
          </div>
        )}

        <div className={styles.buttonsGame}>
          <button className={styles.button} onClick={verTask}>Corrigir!</button>
          <button className={styles.button} onClick={() => setCodigoUsuario('')}>Novo Bug</button>
        </div>
      </div>
    </div>
  );
}
