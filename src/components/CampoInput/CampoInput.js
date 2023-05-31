import { useState, useRef } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import styled from 'styled-components'

const IconsContainer = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledTextField = styled(TextField)`
  && {
    margin: 0.5rem auto;

    @media screen and (min-width: 1024px) {
      margin: 1rem auto;
    }
  }
`

export const CampoInput = (props) => {
  const [value, setValue] = useState('')
  const [erro, setErro] = useState('')
  const inputRef = useRef(null)

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select()
      document.execCommand('copy')
      inputRef.current.setSelectionRange(0, 0)
    }
  }

  const handlePaste = async () => {
    try {
      const conteudo = await navigator.clipboard.readText()
      setValue(`${value} ${conteudo}`) // Aqui você pode usar o conteúdo capturado como desejar
    } catch (error) {
      setErro('Erro ao capturar conteúdo da área de transferência: o navegador não tem suporte para navigator.clipboard.readText() - ' + error)
    }
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <div>
      <StyledTextField
        inputRef={inputRef}
        label={props.label}
        value={value}
        onKeyDown={props.onKeyDown}
        onChange={(e) => {
          setValue(e.target.value)
          props.captarConteudo(e.target.value)
        }}
        variant="outlined"
        readOnly={props.readOnly}
        minRows={4}
        maxRows={props.maxRows}
        id={props.id}
        fullWidth
        multiline
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconsContainer>
                <IconButton onClick={handleCopy} aria-label="Copiar">
                  <FileCopyOutlinedIcon />
                </IconButton>
                <IconButton onClick={handlePaste} aria-label="Colar">
                  <ContentPasteGoOutlinedIcon />
                </IconButton>
                {value && (
                  <IconButton onClick={handleClear} aria-label="Limpar">
                    <HighlightOffOutlinedIcon />
                  </IconButton>
                )}
              </IconsContainer>
            </InputAdornment>
          )
        }}
      />
      {erro && <p style={{color: 'red'}}>{erro}</p>}
    </div>
  )
}