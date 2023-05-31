import ResultadoMolde from "../ResultadoMolde";
import BotaoVoltar from '../BotaoVoltar'
import PStyles from "../../styles/shared/PStyles";
import styled from "styled-components";

const StyledP = styled(PStyles)`
  strong {
    color: red;
    font-weight: bolder;
  }
`

export const Resultado = (props) => {
  return (
    <>
      <BotaoVoltar onClick={props.onClick}/>
      {!props.verificarResultado &&
        <ResultadoMolde
          valueChave={props.valueChave}
          valueMensagem={props.valueMensagem}
        />
      }
      {props.verificarResultado &&
        <>
          <StyledP><strong>Algo deu errado...</strong><br />Verifique sua chave secreta e/ou mensagem criptografada.</StyledP>
          <ResultadoMolde
            valueChave={props.valueChave}
            valueMensagem={props.valueTextoAlvo}
          />
        </>
      }
    </>
  )
}