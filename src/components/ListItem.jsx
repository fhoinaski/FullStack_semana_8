import React, { useState } from 'react';
import { SlClose } from "react-icons/sl";
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import ConfirmModal from './ConfirmaExclusao';
import { Row, Col } from 'react-bootstrap';

export const ListItem = ({ tarefa, tarefaFeita, removerTarefa }) => {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);
  // adiciona o useState para controla o modal
  const [showModal, setShowModal] = useState(false);

  //funçao para fechar o modal
  function closeModal() {
    setShowModal(false);
  }

  //funçao para abri ou fechar o modal
  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  //funçao para finalizar a tarefa como feita
  function handleFinalizarTarefa() {
    setFinalizado(!finalizado);
    tarefaFeita(tarefa.id);
  }

  //funçao para remover a tarefa
  function handleRemoverTarefa() {
    removerTarefa(tarefa.id);
  }

  return (
    <li>
      <Row>
        <Col xs={12} sm={8}>
          <span style={{ marginLeft: '-20px' }}>{tarefa.text}</span>
        </Col>
        <Col xs={12} sm={2}>
          {finalizado ? (
            <GrCheckboxSelected
              onClick={handleFinalizarTarefa}
              style={{ cursor: 'pointer', color: 'blue', margin: '6px' }}
            />
          ) : (
            <GrCheckbox
              onClick={handleFinalizarTarefa}
              style={{ color: 'red', margin: '6px', cursor: 'pointer' }}
            />
          )}
        </Col>
        <Col xs={12} sm={2}>
          <SlClose onClick={toggleModal} style={{ color: 'red', margin: '5px', cursor: 'pointer', marginTop:'5px'}}></SlClose>
        </Col>
      </Row>
      <ConfirmModal
        showModal={showModal}
        closeModal={closeModal}
        handleRemoverTarefa={handleRemoverTarefa}
      />
    </li>
  );
};
