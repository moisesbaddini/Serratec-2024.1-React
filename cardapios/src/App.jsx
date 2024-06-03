import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let texto = "Turma 017";

  let api = {
    id: 1,
    montadora: "VW",
    modelo: "Nivus",
    cor: "Nardo Grey",
    portas: 5,
  };

  for (let i = 0; i < 10; i++) {
    texto += i.toString() + ", ";
  }

  return (
    <div>
      <card className="carro">
        <strong>Montadora</strong>: {api.montadora}
        <br />
        <strong>Modelo</strong>: {api.modelo}
        <br />
        <strong>Portas</strong>: {api.portas}
      </card>
    </div>
  );
}

export default App;
