import Encabezado from "./components/Encabezado/Encabezado";
import Login from "./components/Login/Login";
import Nova from "./components/Nova/Nova";
import Contador from "./components/Contador/Contador"
import Rexistro from "./components/Rexistro/Rexistro";
import { useState } from "react";

function App() {

  const [ vista, setVista ] = useState("portada")

  function manejadorNav(evento) {
    setVista(evento.target.id)
  }

  return (
    <>
    <h1>Tests</h1>

    <h2>Renderizado condicional</h2>

    <nav>
      <h3>Menú</h3>
      <ul>
        <li><a id="portada" onClick={manejadorNav}>Portada</a></li>
        <li><a id="local" onClick={manejadorNav}>Local</a></li>
      </ul>
    </nav>

    <main>
      {vista === "portada" && <h3>Mostrando portada</h3>}
      {vista === "local" && <h3>Mostrando seccion</h3>}
    </main>

    <h2>Rexistro</h2>
    {<Rexistro/>}

    <h2>Contador</h2>
    <Contador/>

    <h2>Encabezado</h2>
    <Encabezado/>

    <h2>Novas</h2>
    <Nova titulo="Este é o título" contido="Este é o contido"/>
    </>
  );
}

export default App;
