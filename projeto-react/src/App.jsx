import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposLIst";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
    {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
      toggle form
    </button>

    {formularioEstaVisivel && (
      <Formulario/>
    )} */}
    </>
  )
}


export default App
