import Formulario from "../../components/Formulario"
import CryptoJS from "crypto-js";
import BotaoMudarPagina from "../../components/BotaoMudarPagina";
import SpanStylesParagrafo from "../../styles/shared/SpanStyles";

export const FormularioCodificador = (props) => {
  return (
    <>
    <Formulario
      regraDeNegocio={(textoAlvo, chave) => CryptoJS.AES.encrypt(textoAlvo, chave).toString()} //Define se será feita codificação ou decodificação
      titulo='Codificador'
      helperText='criptografado'
      textoExplicativo={
        <>
          <h2>Como funciona?</h2><br />
          <p>
            Aqui está o segredo: para criptografar a sua mensagem, você precisa escolher uma <br className='apenas-mobile'/>
            <SpanStylesParagrafo>chave especial</SpanStylesParagrafo>.<br /><br />
            Essa chave é como uma senha mágica que será usada para desvendar a mensagem posteriormente.<br /><br />
            Você pode soltar a imaginação e escolher uma chave única - pode ser uma palavra, um texto, um número especial ou até mesmo um emoji divertido! A escolha é sua!
          </p>
        </>
      }
    />
    <BotaoMudarPagina
      renderizar={props.renderizar}
      statusRenderizar={true}
      descricao='Decodificador'
    />
  </>
  )
}