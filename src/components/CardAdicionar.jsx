import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';




export const CardAdicionar = ({ adicionarTarefa }) => {
  const [tarefa, setTarefa] = useState('');

// Função para lidar com a adição de uma tarefa
const handleAdicionarTarefa = (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Verifica se a tarefa está vazia
  if (tarefa.trim() === '') {
    // Se estiver vazia, não faça nada
    return;
  } else {
    // Se não estiver vazia, adicione a tarefa
    adicionarTarefa(tarefa);
  }
};


  // Atualize o estado da variável "tarefa" para limpar o valor do input
  const handleFocus = (event) => {
    setTarefa(''); 
  }

  return (
    <Container >
      <Row className="justify-content-center">
      <Col xs={12} md={12} lg={12}>
          <div className="card">
            <Form onSubmit={handleAdicionarTarefa}>
              <h3>Minhas tarefas</h3>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Digite uma tarefa"
                  value={tarefa}
                  onFocus={handleFocus}
                  onChange={(event) => setTarefa(event.target.value)}
                />
              </Form.Group>
              <Button
                onClick={handleAdicionarTarefa}
                variant="primary"
                size="sm"
                style={{ margin: '6px' }}
              >
                Adicionar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
