import FormularioMolde from "../../components/FormularioMolde"
import BotaoMudarPagina from "../../components/BotaoMudarPagina";
import { useState } from "react";
import Resultado from "../../components/Resultado";

export const Formulario = (props) => {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [chave, setChave] = useState('')
  const [textoResultado, setTextoResultado] = useState('')
  const [textoAlvo, setTextoAlvo] = useState('')
  const [verificarResultado, setVerificarResultado] = useState(false)

  const resertarFormulario = (event) => {
    event.preventDefault()
    setMostrarResultado(false)
    setChave('')
    setTextoResultado('')
    setTextoAlvo('')
    setVerificarResultado(false)
  }

  return (
    <>
      {!mostrarResultado &&
        <FormularioMolde
          regraDeNegocio={() => props.regraDeNegocio(textoAlvo, chave)}
          titulo={props.tituloPagina}
          textoExplicativo={props.textoExplicativo}
          chave={chave}
          setChave={setChave}
          textoResultado={textoResultado}
          setTextoResultado={setTextoResultado}
          textoAlvo={textoAlvo}
          setTextoAlvo={setTextoAlvo}
          setMostrarResultado={setMostrarResultado}
          setVerificarResultado={setVerificarResultado}
        />
      }
      {mostrarResultado &&
      <Resultado
        valueChave={chave}
        valueMensagem={textoResultado}
        valueTextoAlvo={textoAlvo}
        verificarResultado={verificarResultado}
        onClick={resertarFormulario}
      />
      }
      <BotaoMudarPagina
        renderizar={props.renderizar}
        statusRenderizar={props.statusRenderizar}
        descricao={props.descricaoBotaoMudarPagina}
      />
    </>
  )
}