import { Button } from "@mui/material"
import styled from "styled-components"
import IconeSVG from "../IconeSVG"

const StyledP = styled.p`
  color: var(--azul-padrao);
  font-weight: bolder;
  margin: auto auto 1rem auto;
`

export const BotaoVoltar = (props) => {
  return (
    <div>
      <Button onClick={props.onClick}>
        <IconeSVG
          path="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          altText={`icone do botão de alternar para a página anterior`}
        />
      </Button>
      <StyledP>Voltar</StyledP>
      <hr />
    </div>
  )
}