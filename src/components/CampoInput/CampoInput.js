import { TextField } from "@mui/material";
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  width: 100%;

  && {
    margin: 5px;
  }
`

export const CampoInput = (props) => {
  return (
    <StyledInput
      required={props.required}
      label={props.label}
      helperText={props.helperText}
      onChange={(event) => props.onChange(event.target.value)}
      onKeyDown={props.onKeyDown}
      value={props.value}
      autoComplete="off"
      InputProps={{
        readOnly: props.readOnly,
      }}
      inputRef={props.inputRef}
      multiline={props.multiline}
      maxRows={props.maxRows}
    />
  )
}