import React, { useEffect, useState } from 'react';
import styles from './myfavorites.module.css';

const myfavorites = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('/myfavorites.json') 
      .then(response => response.json())
      .then(data => setJogos(data.jogos))
      .catch(error => console.error('Erro ao carregar jogos:', error));
  }, []);

  return (
    <div className={styles.principal}>
      <div className={styles.home}>
        <div className={styles.listaJogos}>
          {jogos.map(jogo => (
            <a key={jogo.id} href={jogo.steam} target="_blank" rel="noopener noreferrer" className={styles.jogoLink}>
              <div className={styles.jogo}>
                <img src={jogo.imagem} alt={jogo.titulo} />
                <div className={styles.jogoInfo}>
                  <h2>{jogo.titulo}</h2>
                  <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
                  <p>{jogo.descricao}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default myfavorites;
