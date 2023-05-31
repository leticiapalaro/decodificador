import FormularioMolde from "../../components/FormularioMolde"
import CryptoJS from "crypto-js";
import BotaoMudarPagina from "../../components/BotaoMudarPagina";
import SpanStylesParagrafo from "../../styles/shared/SpanStyles";
import { useState } from "react";
import Resultado from "../../components/Resultado";

export const FormularioDecodificador = (props) => {
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
          regraDeNegocio={(textoAlvo, chave) => CryptoJS.AES.decrypt(textoAlvo, chave).toString(CryptoJS.enc.Utf8)}
          titulo='Decodificador'
          textoExplicativo={
            <>
              <h2>Como funciona?</h2><br />
              <p>
                Para descriptografar uma mensagem criptografada, é necessário utilizar a mesma <br className='apenas-mobile'/>
                <SpanStylesParagrafo>chave especial</SpanStylesParagrafo> <br className='apenas-mobile'/>
                usada durante a criptografia.<br /><br />
                A chave age como uma senha mágica que permite desvendar a mensagem original.<br /><br />
                No primeiro campo, insira a sua chave mágica. <br className='apenas-desktop'/><br className='apenas-desktop'/>
                No segundo campo a mensagem a ser desvendada.
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
        statusRenderizar={false}
        descricao='Codificador'
      />
    </>
  )
}