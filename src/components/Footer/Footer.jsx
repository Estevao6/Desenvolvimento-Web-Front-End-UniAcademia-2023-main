import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

// Definição da função que representa o componente Footer
const Footer = () => {
  return (
    // Criação do elemento <footer> que envolve todo o conteúdo do rodapé
    <footer>
      {/* Utilização do componente Container do reactstrap para centralizar e ajustar o conteúdo */}
      <Container>
        {/* Utilização do componente Row para criar uma linha que conterá as colunas do rodapé */}
        <Row>
          {/* Coluna de Informações */}
          <Col xs="12" sm="4" className="text-center">
            {/* Título da coluna de Informações */}
            <h3>Informações</h3>
            {/* Descrição da coluna de Informações */}
            <p>Informações adicionais sobre a loja.</p>
          </Col>
          {/* Coluna de Atendimento */}
          <Col xs="12" sm="4" className="text-center">
            {/* Título da coluna de Atendimento */}
            <h3>Atendimento</h3>
            {/* Descrição da coluna de Atendimento */}
            <p>Detalhes sobre o atendimento ao cliente.</p>
          </Col>
          {/* Coluna de Contato */}
          <Col xs="12" sm="4" className="text-center">
            {/* Título da coluna de Contato */}
            <h3>Contato</h3>
            {/* Descrição da coluna de Contato */}
            <p>Endereço, telefone e e-mail para contato.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Exportação do componente Footer para ser usado em outros lugares do projeto
export default Footer;
