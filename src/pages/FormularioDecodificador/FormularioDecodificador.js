import Formulario from "../../components/Formulario"
import SpanStylesParagrafo from "../../styles/shared/SpanStyles"
import CryptoJS from "crypto-js";

export const FormularioDecodificador = (props) => {
  return (
    <Formulario
      regraDeNegocio={(textoAlvo, chave) => CryptoJS.AES.decrypt(textoAlvo, chave).toString(CryptoJS.enc.Utf8)}
      tituloPagina='Decodificador'
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
      // * As props abaixo referem-se ao Botão de Mudar Página
      // 'renderizar' passa o useState que controla qual página é exibida (codificar ou decodificar)
      // 'statusRenderizar' passa para o botão de trocar página o que será renderizado após o evento de onClick
      // true = sair da página de codificar e ir para a página de decodificar
      // false = sair da página de decodificar e ir para a página de codificar
      renderizar={props.renderizar}
      statusRenderizar={false}
      descricaoBotaoMudarPagina='Codificador'
    />
  )
}