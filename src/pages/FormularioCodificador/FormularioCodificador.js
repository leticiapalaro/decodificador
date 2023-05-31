import FormularioMolde from "../../components/FormularioMolde"
import CryptoJS from "crypto-js";
import BotaoMudarPagina from "../../components/BotaoMudarPagina";
import SpanStylesParagrafo from "../../styles/shared/SpanStyles";
import { useState } from "react";
import Resultado from '../../components/Resultado'

export const FormularioCodificador = (props) => {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [chave, setChave] = useState('')
  const [textoResultado, setTextoResultado] = useState('')
  const [textoAlvo, setTextoAlvo] = useState('')

  const resertarFormulario = (event) => {
    event.preventDefault()
    setMostrarResultado(false)
    setChave('')
    setTextoResultado('')
    setTextoAlvo('')
  }

  return (
    <>
    {!mostrarResultado &&
      <FormularioMolde
        regraDeNegocio={(textoAlvo, chave) => CryptoJS.AES.encrypt(textoAlvo, chave).toString()} //Define se será feita codificação ou decodificação
        titulo='Codificador'
        textoExplicativo={
          <>
            <h2>Como funciona?</h2><br />
            <p>
              Aqui está o segredo: para criptografar a sua mensagem, você precisa escolher uma <br className='apenas-mobile'/>
              <SpanStylesParagrafo>chave especial</SpanStylesParagrafo>.<br /><br />
              Essa chave é como uma senha mágica que será usada para desvendar a mensagem posteriormente.<br /><br />
              Você pode soltar a imaginação e escolher uma chave única - pode ser uma palavra, um texto, um número especial ou até mesmo um emoji divertido!<br />A escolha é sua!
            </p><br />
          </>
        }
        chave={chave}
        setChave={setChave}
        textoResultado={textoResultado}
        setTextoResultado={setTextoResultado}
        textoAlvo={textoAlvo}
        setTextoAlvo={setTextoAlvo}
        setMostrarResultado={setMostrarResultado}
      />
    }
    {mostrarResultado &&
      <Resultado
        valueChave={chave}
        valueMensagem={textoResultado}
        onClick={resertarFormulario}
      />
    }
    <BotaoMudarPagina
      renderizar={props.renderizar}
      statusRenderizar={true}
      descricao='Decodificador'
    />
  </>
  )
}