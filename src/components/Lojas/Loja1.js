import React from 'react';
import Categoria1 from '../Categorias/Categoria1';
import Categoria2 from '../Categorias/Categoria2';
import Categoria3 from '../Categorias/Categoria3';
import Categoria4 from '../Categorias/Categoria4';
import Categoria5 from '../Categorias/Categoria5';
import Categoria6 from '../Categorias/Categoria6';
import './Loja.css';

function Loja1() {
  return (
    <div>
      <h1>Loja 1</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria1"
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Categoria 1</h3>
            <p>Conteúdo da Categoria 1</p>
          </div>
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria2"
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Categoria 2</h3>
            <p>Conteúdo da Categoria 2</p>
          </div>
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria3"
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Categoria 3</h3>
            <p>Conteúdo da Categoria 3</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria4"
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Categoria 4</h3>
            <p>Conteúdo da Categoria 4</p>
          </div>
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria5"
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Categoria 5</h3>
            <p>Conteúdo da Categoria 5</p>
          </div>
          <div className="categoria-card">
            <img
              src="caminho-da-imagem-da-categoria6"
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Categoria 6</h3>
            <p>Conteúdo da Categoria 6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja1;
