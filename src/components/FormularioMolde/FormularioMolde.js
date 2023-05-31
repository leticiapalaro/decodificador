import CampoInput from '../CampoInput'
import styled from 'styled-components'
import BotaoSubtmit from '../BotaoSubmit'

const StyledForm = styled.form`
  h1 {
    margin: 5rem auto 0.5rem auto;
    line-height: 1.8rem;
  }

  strong {
    color: var(--azul-padrao);
    font-family: var(--font-nunito);
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 3rem;
  }

  @media screen and (min-width: 1024px) {
    strong {
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }
`

export const FormularioMolde = (props) => {
  const handleEnterPressChave = (event) => {
    if (event.keyCode === 13) { // Enter key code
      event.preventDefault()
      const inputElement = document.getElementById('mensagemInput')
      if (inputElement) {
        inputElement.focus()
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const textoAlvoSemEspacosNoFinal = props.textoAlvo.trimEnd()
    const chaveSemEspacosNoFinal = props.chave.trimEnd()
    const regraDeNegocio = props.regraDeNegocio(textoAlvoSemEspacosNoFinal, chaveSemEspacosNoFinal)
    // Aplicar a regra de negócio com os valores sem espaços em branco
    props.setTextoResultado(regraDeNegocio)
    props.setMostrarResultado(true)
    if (regraDeNegocio == '') props.setVerificarResultado(true)
  }

  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <h1>
        Bem-vindo(a) ao <br />
        <strong>{props.titulo}</strong><br />
      </h1>
      <CampoInput
        label='insira a chave secreta'
        captarConteudo={props.setChave}
        onKeyDown={handleEnterPressChave}
        maxRows={5}
        id='chaveInput'
      />
      <CampoInput
        label='insira a mensagem'
        captarConteudo={props.setTextoAlvo}
        maxRows={5}
        id='mensagemInput'
      />
      <BotaoSubtmit id='botao-submit' />
      <br/><br/>
      {props.textoExplicativo}
    </StyledForm>
  )
}