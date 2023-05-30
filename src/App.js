import { useState } from "react";
import { GlobalStyle } from './styles/GlobalStyle';
import FormularioCodificador from "./pages/FormularioCodificador";
import FormularioDecodificador from "./pages/FormularioDecodificador";
import DivStyles from "./styles/shared/DivStyles";

function App() {
  const [mostrarDecodificador, setMostrarDecodificador] = useState(false)

  return (
    <DivStyles>

      <GlobalStyle />

      {!mostrarDecodificador &&
        <FormularioCodificador renderizar={setMostrarDecodificador}/>
      }

      {mostrarDecodificador &&
        <FormularioDecodificador renderizar={setMostrarDecodificador}/>
      }

    </DivStyles>
  )
}

export default App;