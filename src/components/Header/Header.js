// Importando os hooks 'useState' e 'useEffect' do React, e a biblioteca 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// Componente funcional 'Header'
function Header(props) {
  const welcomeMessage = props.welcomeMessage;
  // Declaração do state para armazenar a data e hora atual
  // 'dateTime' guarda o valor atual e 'setDateTime' é a função usada para atualizá-lo
  const [dateTime, setDateTime] = useState(new Date());

  // 'useEffect' é usado para efeitos colaterais, como alterações no DOM ou solicitações de dados
  // Neste caso, ele atualiza a data e hora a cada segundo
  useEffect(() => {
    // 'setInterval' executa a função passada a cada x milissegundos (1000 ms = 1 s)
    const timer = setInterval(() => {
      // Atualiza o state 'dateTime' com a nova data e hora
      setDateTime(new Date());
    }, 1000);

    // Função de limpeza: é executada quando o componente é desmontado
    // Limpa o intervalo para evitar vazamento de memória
    return () => {
      clearInterval(timer);
    };
  }, []); // Array vazio '[]' como dependência significa que o efeito será executado apenas uma vez

  // Retorna o componente renderizado
  return (
    <header className={styles.header}>
      {/* Título do Header */}
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo do Shopping" />
        <h1>Bem-vindo ao Shopping</h1>
      </div>
      {/* Data e hora atual */}
      <p className={styles.headerDateTime}>{dateTime.toLocaleString()}</p>
      {/* Navegação */}
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* 'Link' é um componente do 'react-router-dom' para navegar entre páginas sem recarregar */}
            <Link to="/">Início</Link>
          </li>
          <li className={styles.dropdown}>
            <span>Lojas</span>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/loja1">Loja 1</Link>
              </li>
              <li>
                <Link to="/loja2">Loja 2</Link>
              </li>
              <li>
                <Link to="/loja3">Loja 3</Link>
              </li>
              <li>
                <Link to="/loja4">Loja 4</Link>
              </li>
              <li>
                <Link to="/loja5">Loja 5</Link>
              </li>
              <li>
                <Link to="/loja6">Loja 6</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Exporta o componente 'Header' para ser usado em outros lugares
export default Header;
