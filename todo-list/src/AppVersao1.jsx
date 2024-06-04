import React from "react";
import "./App.css";

const tarefas = ["Estudar useState", "Praticar useEffect"];

function App() {
  const [lista, setLista] = React.useState(tarefas);

  const itens = [];

  for (let item of lista) {
    itens.push(<li>{item}</li>);
  }

  return (
    <>
      <h2>To-do List</h2>

      <ol>{itens}</ol>
    </>
  );
}

export default App;
