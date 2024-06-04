import React from "react";
import "./App.css";
import Item from "./Item.jsx";

const tarefas = ["useState estados", "useEffect efeitos", "arrow functions"];

function App() {
  const [lista, setLista] = React.useState(tarefas);

  function clicar() {
    //javaScript
    setLista(["item novo"]);
  }

  return (
    <>
      <h2>Lista de estudos</h2>

      <button onClick={clicar}>Criar</button>

      <ol>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}

        <Item />
      </ol>
    </>
  );
}

export default App;
