import { useRef } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
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

export const CampoResultado = (props) => {
  const inputRef = useRef(null)
  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select()
      document.execCommand('copy')
      inputRef.current.setSelectionRange(0, 0)
    }
  }

  return (
    <div>
      <StyledTextField
        inputRef={inputRef}
        label={props.label}
        value={props.value}
        variant="outlined"
        minRows={4}
        maxRows={props.maxRows}
        id={props.id}
        readOnly
        fullWidth
        multiline
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconsContainer>
                <IconButton onClick={handleCopy} aria-label="Copiar">
                  <FileCopyOutlinedIcon />
                </IconButton>
              </IconsContainer>
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}