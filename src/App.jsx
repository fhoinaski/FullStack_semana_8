import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardAdicionar } from "./components/CardAdicionar";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [attId, setAttId] = useState(1);

  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, { text: tarefa, id: attId, finalizado: false }]);
    setAttId(attId + 1);

  };

  const tarefasFeitas = (tarefaId) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaId ? { ...tarefa, finalizado: !tarefa.finalizado } : tarefa
      )
    );
  };
  const removerTarefa = (tarefaId) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId));
  };

  return (
    <div className="App">

      <CardAdicionar adicionarTarefa={addTarefa}></CardAdicionar>

      <div className={tarefas.length > 0 ? "card m-2" : ""}>
        <h3>{tarefas.length > 0 ? "Lista de tarefas" : ""}</h3>
        <ul className={tarefas.length > 0 ? "card m-3" : ""}>
          {tarefas.map((tarefa) => (
            <ListItem
              key={tarefa.id}
              tarefa={tarefa}
              tarefaFeita={tarefasFeitas}
              removerTarefa={removerTarefa}
            ></ListItem>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default App;
