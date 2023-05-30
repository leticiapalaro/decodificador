import { Button, ButtonGroup } from "@mui/material"
import CampoInput from "../CampoInput"
import { useEffect, useRef, useState } from "react"
import SpanStylesParagrafo from "../../styles/shared/SpanStyles"
import PStyles from "../../styles/shared/PStyles"

export const Resultado = (props) => {
  const [aviso, setAviso] = useState('')
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const copiarTexto = (tipo, texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        const genero = (tipo == 'Chave' || tipo == 'Mensagem') ? ' copiada ' : ' copiado '
        setAviso(
          <>Pronto!
            <SpanStylesParagrafo> {tipo}</SpanStylesParagrafo>
            {genero} <br />
            para a área de transferência.
          </>
        )
      })
  }

  return (
    <>
      <CampoInput
        type='text'
        label={props.labelChave}
        value={props.valueChave}
        readOnly={true}
        multiline={false}
        maxRows={1}
      /><br /><br />
      <CampoInput
        type='text'
        label={props.labelMensagem}
        value={props.valueMensagem}
        readOnly={true}
        multiline={true}
        maxRows={15}
        inputRef={inputRef}
      /><br /><br />
      <PStyles>Deseja copiar algum conteúdo?</PStyles>
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
        <Button onClick={() => copiarTexto('Chave', props.valueChave)}>Chave</Button>
        <Button onClick={() => copiarTexto('Mensagem', props.valueMensagem)}>Mensagem</Button>
        <Button onClick={() => copiarTexto('Tudo', `Chave: ${props.valueChave}` + "\n" + `Mensagem: ${props.valueMensagem}`)}>Tudo</Button>
      </ButtonGroup>
      <PStyles>{aviso}</PStyles>
    </>
  )
}