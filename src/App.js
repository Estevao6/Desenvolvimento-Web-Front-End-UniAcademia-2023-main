import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import CarouselShopping from './components/CarouselShopping/CarouselShopping';
import Main from "./components/Main/Main";
import Loja1 from "./components/Lojas/Loja1";
import Loja2 from "./components/Lojas/Loja2";
import Loja3 from "./components/Lojas/Loja3";
import Loja4 from "./components/Lojas/Loja4";
import Loja5 from "./components/Lojas/Loja5";
import Loja6 from "./components/Lojas/Loja6";
import Footer from "./components/Footer/Footer";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import './App.css';

const carouselImages = [
  { src: '/img1.jpg', alt: 'Imagem 1' },
  { src: '/img2.jpg', alt: 'Imagem 2' },
  { src: '/img3.jpg', alt: 'Imagem 3' },
];

function App() {
  return (
    <Router>
      <Header welcomeMessage="Bem-vindo ao Shopping Futuro" />
      <CarouselShopping images={carouselImages} />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loja1" element={<Loja1 />} />
          <Route path="/loja2" element={<Loja2 />} />
          <Route path="/loja3" element={<Loja3 />} />
          <Route path="/loja4" element={<Loja4 />} />
          <Route path="/loja5" element={<Loja5 />} />
          <Route path="/loja6" element={<Loja6 />} />
        </Routes>
        <FormCadastro />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;