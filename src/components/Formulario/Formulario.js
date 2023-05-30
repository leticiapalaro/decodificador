import CampoInput from '../CampoInput'
import { useState, useRef } from "react"
import BotaoVoltar from '../BotaoVoltar'
import Resultado from '../Resultado'
import PStyles from '../../styles/shared/PStyles'
import styled from 'styled-components'
import BotaoFormularioPrincipal from '../BotaoFormularioPrincipal'

const StyledSection = styled.section`
  h1, h2 {
    margin: 0.5rem auto;
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
    h2 {
      font-size: 2.5rem;
      margin: 2rem;
    }

    strong {
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }
`

const StyledP = styled(PStyles)`
  color: white;
  border: 1px solid red;
  background: red;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;
`

export const Formulario = (props) => {
  const chaveInputRef = useRef(null)
  const [chave, setChave] = useState('')
  const [textoAlvo, setTextoAlvo] = useState('')
  const [textoResultado, setTextoResultado] = useState('')
  const [mostraErro, setMostraErro] = useState(false)
  const [mostraResultado, setMostraResultado] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!chave || !textoAlvo) {
      setMostraErro(true);
      return;
    }
    // regra de negócio = criptografar ou descriptografar, recebido via props
    const regraDeNegocio = props.regraDeNegocio(textoAlvo, chave)
    if (regraDeNegocio) {
      setTextoResultado(regraDeNegocio)
    } else {
      setTextoResultado('')
    }
    setMostraErro(false)
    setMostraResultado(true)
  };

  const resetarCampos = (event) => {
    event.preventDefault()
    setChave('')
    setTextoAlvo('')
    setMostraErro(false)
    if (chaveInputRef.current) {
      chaveInputRef.current.focus()
    }
  }

  const resetarFormulario = (event) => {
    event.preventDefault()
    resetarCampos(event)
    setTextoAlvo('')
    setMostraResultado(false)
  }

  return (
    <>
      {!mostraResultado &&
        <StyledSection>
          <form>
            <h1>
              Bem-vindo(a)<br className='apenas-mobile'/> ao nosso incrível<br />
              <strong>{props.titulo}</strong><br />
              de mensagens!
            </h1>

            <CampoInput
              type='text'
              helperText='insira a chave de criptografia'
              label='chave secreta'
              onChange={setChave}
              value={chave}
              readOnly={false}
              inputRef={chaveInputRef}
              maxRows={2}
            /><br />

            <CampoInput
              type='text'
              helperText={`insira o texto a ser ${props.helperText}`}
              label='texto'
              onChange={setTextoAlvo}
              value={textoAlvo}
              readOnly={false}
              maxRows={5}
            /><br />

            {mostraErro && <StyledP>Preencha todos os campos!</StyledP>}

            <BotaoFormularioPrincipal
              onClick={handleSubmit}
              // path="M4.5 12.75l6 6 9-13.5"
              descricao='Enviar'
            />

            <BotaoFormularioPrincipal
              onClick={resetarCampos}
              // path="M6 18L18 6M6 6l12 12"
              descricao='Resetar'
            />

            <br /><br />
            {props.textoExplicativo}
          </form>
        </StyledSection>
      }

      {mostraResultado &&
        <StyledSection>

          <BotaoVoltar
            onClick={resetarFormulario}
          />

          <h2>Resultado</h2>

          {textoResultado && // caso o codificado/decodificador seja executado com sucesso
            <Resultado
              labelChave='chave'
              valueChave={chave}
              labelMensagem='mensagem'
              valueMensagem={textoResultado}
            />
          }

          {!textoResultado && // caso o codificado/decodificador tenha algum problema
            <>
              <StyledP>Algo deu errado, verifique sua chave e/ou mensagem.</StyledP>
              <Resultado
                labelChave='verifique sua chave'
                valueChave={chave}
                labelMensagem='verifique sua mensagem a ser decodificada'
                valueMensagem={textoAlvo}
              />
            </>
          }

        </StyledSection>
      }

    </>
  )
}