import React from 'react';
import Categoria1 from '../Categorias/Categoria1';
import Categoria2 from '../Categorias/Categoria2';
import Categoria3 from '../Categorias/Categoria3';
import Categoria4 from '../Categorias/Categoria4';
import Categoria5 from '../Categorias/Categoria5';
import Categoria6 from '../Categorias/Categoria6';

function Loja6() {
  return (
    <div>
      <h1>Loja 6</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <Categoria1 />
          <Categoria2 />
          <Categoria3 />
        </div>
        <div className="categoria-row">
          <Categoria4 />
          <Categoria5 />
          <Categoria6 />
        </div>
      </div>
    </div>
  );
}

export default Loja6;
