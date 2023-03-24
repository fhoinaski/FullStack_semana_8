import React from 'react';
import { Button, Modal } from 'react-bootstrap';

//modal para abri quando o usuario clicar no botao de excluir

const ConfirmModal = ({ showModal, closeModal, handleRemoverTarefa }) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza de que deseja excluir esta tarefa?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleRemoverTarefa}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
