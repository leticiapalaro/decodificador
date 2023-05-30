import { Button } from "@mui/material"
import styled from "styled-components"

const StyledButton = styled(Button)`
  && {
    margin: 5px;
    width: 100px;
  }
`

export const BotaoFormularioPrincipal = (props) => {
  return(
      <StyledButton variant="contained" onClick={props.onClick}>
        <p>{props.descricao}</p>
      </StyledButton>
  )
}