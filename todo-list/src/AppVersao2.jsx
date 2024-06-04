import React from "react";
import "./App.css";
import Item from "./Item.jsx";

const tarefas = ["useState estados", "useEffect efeitos", "arrow functions"];

function App() {
  const [lista, setLista] = React.useState(tarefas);

  return (
    <>
      <h2>Lista de estudos</h2>

      <ol>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ol>
    </>
  );
}

export default App;
