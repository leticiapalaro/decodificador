import Formulario from "../../components/Formulario"
import CryptoJS from "crypto-js";
import BotaoMudarPagina from "../../components/BotaoMudarPagina";
import SpanStylesParagrafo from "../../styles/shared/SpanStyles";

export const FormularioDecodificador = (props) => {
  return (
    <>
    <Formulario
      regraDeNegocio={(textoAlvo, chave) => CryptoJS.AES.decrypt(textoAlvo, chave).toString(CryptoJS.enc.Utf8)}
      titulo='Decodificador'
      helperText='descriptografado'
      textoExplicativo={
        <>
          <h2>Como funciona?</h2><br />
          <p>
            Para descriptografar uma mensagem criptografada, é necessário utilizar a mesma <br className='apenas-mobile'/>
            <SpanStylesParagrafo>chave especial</SpanStylesParagrafo> <br className='apenas-mobile'/>
            usada durante a criptografia.<br /><br />
            A chave age como uma senha mágica que permite desvendar a mensagem original.<br /><br />
            No primeiro campo, insira a sua chave mágica.
            <br className='apenas-desktop'/>
            <br className='apenas-desktop'/>
            No segundo campo o texto a ser desvendado.
          </p>
        </>
      }
    />
    <BotaoMudarPagina
      renderizar={props.renderizar}
      statusRenderizar={false}
      descricao='Codificador'
    />

  </>
  )
}