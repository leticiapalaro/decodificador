import CampoInput from '../CampoInput'
import { useState, useRef } from "react"
import BotaoVoltar from '../BotaoVoltar'
import Resultado from '../Resultado'
import PStyles from '../../styles/shared/PStyles'
import styled from 'styled-components'
import BotaoFormularioPrincipal from '../BotaoFormularioPrincipal'
import SpanStylesParagrafo from '../../styles/shared/SpanStyles'

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

  const handlePaste = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText()
      const lines = clipboardData.split('\n')

      let chavePreenchida = false
      let mensagemPreenchida = false

      for (const line of lines) {
        if (line.startsWith('Chave:')) {
          const chave = line.substring(6).trim()
          setChave(chave)
          chavePreenchida = true
        } else if (line.startsWith('Mensagem:')) {
          const mensagem = line.substring(9).trim()
          setTextoAlvo(mensagem)
          mensagemPreenchida = true
        }
      }

      if (!chavePreenchida && !mensagemPreenchida) {
        const focusedInput = document.activeElement
        if (focusedInput === chaveInputRef.current) {
          setChave(clipboardData)
        } else {
          setTextoAlvo(clipboardData)
        }
      }
    } catch (error) {
      console.error('Erro ao ler o conteúdo da área de transferência:', error);
    }
  };

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
              label='mensagem'
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

            {props.botaoColar &&
              <BotaoFormularioPrincipal
                onClick={handlePaste}
                descricao='Colar'
            />}

            <br /><br />
            {props.textoExplicativo}
            <hr /><br />
            <div style={{marginBottom: '5rem'}}>
              {props.botaoColar &&
                <>
                  <p>Você pode <br className='apenas-mobile'/><SpanStylesParagrafo>usar o botão de colar nos dois campos</SpanStylesParagrafo> <br className='apenas-mobile'/>se o conteúdo da área de transferência estiver no formato:</p><br /><br className='apenas-mobile'/>
                    <div>
                      <p>Chave: chave descrita aqui</p>
                      <p>Mensagem: mensagem descrita aqui</p>
                    </div><br /><br className='apenas-mobile'/>
                  <p>É o mesmo formato utilizado em nossa área de resultados, proveniente do botão de copiar todo conteúdo.</p>
                </>
              }
            </div>
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