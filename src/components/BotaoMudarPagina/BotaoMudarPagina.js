import { Button } from "@mui/material"
import styled from "styled-components"
import IconeSVG from "../IconeSVG"

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
`

export const BotaoMudarPagina = (props) => {
  return(
    <StyledDiv>
      <StyledButton variant="contained" onClick={() => props.renderizar(props.statusRenderizar)}>
        IR PARA {props.descricao}
        <IconeSVG
          height='2rem'
          margin='0 5px'
          path="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          altText={`icone do botão de alternar para a página de ${props.descricao}`}
        />
      </StyledButton>
    </StyledDiv>
  )
}