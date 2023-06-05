// Importando o React, ReactDOM e componentes necessários
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Renderiza o componente 'App' dentro da div com o ID 'root'
ReactDOM.render(
  // 'React.StrictMode' é um componente que verifica possíveis problemas no aplicativo durante o desenvolvimento
  <React.StrictMode>
    {/* Incluindo o componente 'App' */}
    <App />
  </React.StrictMode>,
  // Seleciona o elemento com o ID 'root' no HTML para renderizar o aplicativo
  document.getElementById('root')
);

// 'reportWebVitals' é uma função que coleta métricas de desempenho do aplicativo
reportWebVitals();
