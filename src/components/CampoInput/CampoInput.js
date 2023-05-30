import { TextField } from "@mui/material";
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  width: 100%;
`

export const CampoInput = (props) => {
  return (
    <StyledInput
      required={props.required}
      label={props.label}
      helperText={props.helperText}
      onChange={(event) => props.onChange(event.target.value)}
      value={props.value}
      autoComplete="off"
      InputProps={{
        readOnly: props.readOnly,
      }}
      inputRef={props.inputRef}
      multiline
      maxRows={props.maxRows}
    />
  )
}