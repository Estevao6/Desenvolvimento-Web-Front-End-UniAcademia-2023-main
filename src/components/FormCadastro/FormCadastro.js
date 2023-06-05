import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './FormCadastro.css';

// Componente FormCadastro para cadastrar os usuários
const FormCadastro = () => {
  // Variáveis de estado para controlar o envio do formulário, a exibição do modal e os dados do formulário
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário (recarregar a página)
    setFormData(new FormData(e.target)); // Armazenar os dados do formulário em um objeto FormData
    setShowModal(true); // Mostrar o pop-up de confirmação
  };

  // Função que lida com a confirmação dos dados no pop-up
  const handleConfirm = () => {
    setShowModal(false); // Esconder o pop-up de confirmação
    setSubmitted(true); // Marcar o formulário como enviado
  };

  // Função que permite ao usuário pular o cadastro
  const handleSkip = () => {
    setSubmitted(true); // Marcar o formulário como enviado
  };

  // Função que lida com a mudança no campo WhatsApp e permite apenas números
  const handleWhatsAppChange = (e) => {
    const value = e.target.value.replace(/\D+/g, ''); // Substituir todos os caracteres não-numéricos por nada
    e.target.value = value; // Atualizar o valor do campo
  };

  // Função que lida com a mudança no campo Nome e permite apenas letras
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]+/g, ''); // Substituir todos os caracteres não-alfabéticos por nada
    e.target.value = value; // Atualizar o valor do campo
  };

  // Função que lida com a mudança no campo CPF e permite apenas números
  const handleCPFChange = (e) => {
    const value = e.target.value.replace(/\D+/g, ''); // Substituir todos os caracteres não-numéricos por nada
    e.target.value = value; // Atualizar o valor do campo
  };

  // Renderizar a mensagem de sucesso ou o formulário e o pop-up de confirmação
  return submitted ? (
    // Exibir a mensagem de sucesso se o formulário foi enviado
    <div className="success-message">
      <h2>Seja bem-vindo ao Shopping Futuro!</h2>
    </div>
  ) : (
    // Exibir o formulário e o pop-up de confirmação caso contrário
    <>
      {/* Formulário de cadastro */}
      <Form onSubmit={handleSubmit} className="form-cadastro">
        {/* Campos do formulário */}
        <FormGroup>
        {/* Rótulo (label) para o campo nome */}
  <Label for="nome">Nome:</Label>
  {/* Campo (input) para o usuário digitar o nome */}
  <Input type="text" name="nome" id="nome" required onChange={handleNameChange} />
</FormGroup>
{/* Fim do grupo de campos do formulário */}

{/* Início do grupo de campos do formulário */}
<FormGroup>
  {/* Rótulo (label) para o campo e-mail */}
  <Label for="email">E-mail:</Label>
  {/* Campo (input) para o usuário digitar o e-mail */}
  <Input type="email" name="email" id="email" required />
</FormGroup>
{/* Fim do grupo de campos do formulário */}

{/* Início do grupo de campos do formulário */}
<FormGroup>
  {/* Rótulo (label) para o campo CPF */}
  <Label for="cpf">CPF:</Label>
  {/* Campo (input) para o usuário digitar o CPF */}
  <Input type="text" name="cpf" id="cpf" minLength="11" maxLength="11" required onChange={handleCPFChange} />
</FormGroup>
{/* Fim do grupo de campos do formulário */}

{/* Início do grupo de campos do formulário */}
<FormGroup>
  {/* Rótulo (label) para o campo idade */}
  <Label for="idade">Idade:</Label>
  {/* Campo (input) para o usuário digitar a idade */}
  <Input type="number" name="idade" id="idade" min="18" required />
</FormGroup>
{/* Fim do grupo de campos do formulário */}

{/* Início do grupo de campos do formulário */}
<FormGroup>
  {/* Rótulo (label) para o campo WhatsApp */}
  <Label for="whatsapp">WhatsApp:</Label>
  {/* Campo (input) para o usuário digitar o número do WhatsApp */}
  <Input
    type="text"
    name="whatsapp"
    id="whatsapp"
    minLength="10"
    maxLength="15"
    required
    onChange={handleWhatsAppChange}
  />
</FormGroup>
{/* Fim do grupo de campos do formulário */}

{/* Botões de cadastro e pular cadastro */}
<Button type="submit">Cadastrar</Button>
<Button color="link" onClick={handleSkip} className="skip-button">Pular Cadastro</Button>
</Form>

{/* Pop-up de confirmação */}
<Modal isOpen={showModal} toggle={handleConfirm}>
  {/* Cabeçalho do pop-up */}
  <ModalHeader toggle={handleConfirm}>Confirmação de Cadastro</ModalHeader>
  {/* Corpo do pop-up */}
  <ModalBody>
    {/* Exibição dos dados informados pelo usuário */}
    <p>Nome: {formData && formData.get('nome')}</p>
    <p>E-mail: {formData && formData.get('email')}</p>
    <p>CPF: {formData && formData.get('cpf')}</p>
    <p>Idade: {formData && formData.get('idade')}</p>
    <p>WhatsApp: {formData && formData.get('whatsapp')}</p>
  </ModalBody>
  {/* Rodapé do pop-up */}
  <ModalFooter>
    {/* Botões para confirmar e cancelar */}
    <Button color="primary" onClick={handleConfirm}>Confirmar</Button>
    <Button color="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FormCadastro;

