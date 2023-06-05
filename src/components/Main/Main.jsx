import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const selectItem = (itemId) => {
    setSelectedItem(itemId);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleInputChange = (event) => {
    setNewItemText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newItemText);
    setNewItemText("");
  };

  const [newItemText, setNewItemText] = useState("");

  return (
    <main>
      <div id="top"></div>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="shopping-center-title">Conheça nossas lojas</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md="4" className="text-center">
                <Link to="/loja1" onClick={() => selectItem(1)}>
                  <img
                    src="caminho-da-imagem-da-loja-1"
                    alt="Loja 1"
                    className={`store-image ${selectedItem === 1 ? 'selected' : ''}`}
                  />
                  <h3>Loja 1</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja2" onClick={() => selectItem(2)}>
                  <img
                    src="caminho-da-imagem-da-loja-2"
                    alt="Loja 2"
                    className={`store-image ${selectedItem === 2 ? 'selected' : ''}`}
                  />
                  <h3>Loja 2</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja3" onClick={() => selectItem(3)}>
                  <img
                    src="caminho-da-imagem-da-loja-3"
                    alt="Loja 3"
                    className={`store-image ${selectedItem === 3 ? 'selected' : ''}`}
                  />
                  <h3>Loja 3</h3>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="text-center">
                <Link to="/loja4" onClick={() => selectItem(4)}>
                  <img
                    src="caminho-da-imagem-da-loja-4"
                    alt="Loja 4"
                    className={`store-image ${selectedItem === 4 ? 'selected' : ''}`}
                  />
                  <h3>Loja 4</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja5" onClick={() => selectItem(5)}>
                  <img
                    src="caminho-da-imagem-da-loja-5"
                    alt="Loja 5"
                    className={`store-image ${selectedItem === 5 ? 'selected' : ''}`}
                  />
                  <h3>Loja 5</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja6" onClick={() => selectItem(6)}>
                  <img
                    src="caminho-da-imagem-da-loja-6"
                    alt="Loja 6"
                    className={`store-image ${selectedItem === 6 ? 'selected' : ''}`}
                  />
                  <h3>Loja 6</h3>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="scroll-to-top-container">
          <button className="scroll-to-top" onClick={scrollToTop}>
            Ir para o topo
          </button>
        </div>
      </Container>
      <div className="list-container-bottom-left">
        <h2>Lista de Itens</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newItemText}
            onChange={handleInputChange}
          />
          <button type="submit">Adicionar Item</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
