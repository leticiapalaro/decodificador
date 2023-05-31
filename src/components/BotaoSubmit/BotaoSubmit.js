import React from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export const BotaoSubtmit = () => {
  return (
    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
      Enviar
    </Button>
  )
}