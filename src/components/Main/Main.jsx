// Importando o React e alguns componentes do 'reactstrap'
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Main.css";

// Criando um componente funcional chamado 'Main'
const Main = () => {
  // Retorna o JSX (HTML) do componente
  return (
    <main>
      {/* 'Container' é um componente do 'reactstrap' para alinhar e centralizar o conteúdo */}
      <Container>
        {/* 'Row' e 'Col' são componentes do 'reactstrap' para criar um layout responsivo baseado em grid */}
        <Row>
          <Col className="text-center">
            {/* Exibe o título da seção "Conheça nossas lojas" */}
            <h2 className="shopping-center-title">Conheça nossas lojas</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Cria duas linhas de lojas, cada uma com três colunas (lojas) */}
            <Row>
              {/* 'md="4"' define a largura das colunas para 4/12 (1/3) da largura total no breakpoint 'md' */}
              <Col md="4" className="text-center">
                {/* 'Link' é usado para navegar entre páginas sem recarregar */}
                <Link to="/loja1">
                  <img
                    src="caminho-da-imagem-da-loja-1"
                    alt="Loja 1"
                    className="store-image"
                  />
                  <h3>Loja 1</h3>
                </Link>
              </Col>
              {/* 'md="4"' define a largura das colunas para 4/12 (1/3) da largura total no breakpoint 'md' */}
              <Col md="4" className="text-center">
                {/* 'Link' é usado para navegar entre páginas sem recarregar */}
                <Link to="/loja2">
                  <img
                    src="caminho-da-imagem-da-loja-2"
                    alt="Loja 2"
                    className="store-image"
                  />
                  <h3>Loja 2</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja3">
                  <img
                    src="caminho-da-imagem-da-loja-3"
                    alt="Loja 3"
                    className="store-image"
                  />
                  <h3>Loja 3</h3>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="text-center">
                <Link to="/loja4">
                  <img
                    src="caminho-da-imagem-da-loja-4"
                    alt="Loja 4"
                    className="store-image"
                  />
                  <h3>Loja 4</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja5">
                  <img
                    src="caminho-da-imagem-da-loja-5"
                    alt="Loja 5"
                    className="store-image"
                  />
                  <h3>Loja 5</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja6">
                  <img
                    src="caminho-da-imagem-da-loja-6"
                    alt="Loja 6"
                    className="store-image"
                  />
                  <h3>Loja 6</h3>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

// Exporta o componente 'Main' para ser utilizado em outros arquivos
export default Main;
