import React from "react";
import "./App.css";
import Item from "./Item.jsx";
import { Link } from "react-router-dom";

const tarefas = ["useState estados", "useEffect efeitos", "arrow functions"];

function App() {
  const [lista, setLista] = React.useState(tarefas);

  function clicar(evento) {
    const form = new FormData(evento.target.parentElement);
    const texto = form.get("texto");
    const concluida = form.get("concluida");

    const novo = lista.concat();
    novo.push(texto + " " + concluida?.toString());
    setLista(novo);
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
        </nav>
      </header>

      <h2>Lista de estudos</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="texto" />
        <input type="checkbox" name="concluida" /> Concluída
        <button onClick={clicar}>Criar</button>
      </form>

      <ol>
        {lista.map((item, i) => (
          <li key={i}>
            {item} <Link to="/detalhes">Detalhes... </Link>
          </li>
        ))}

        <Item />
      </ol>
    </>
  );
}

export default App;
