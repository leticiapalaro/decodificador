import CampoResultado from "../CampoResultado"

export const ResultadoMolde = (props) => {
  return (
    <>
      <CampoResultado
        label='chave'
        maxRows={5}
        id='chaveInput'
        value={props.valueChave}
      />
      <CampoResultado
        label='mensagem'
        maxRows={5}
        id='mensagemInput'
        value={props.valueMensagem}
      />
      <CampoResultado
        label='todo conteúdo'
        maxRows={10}
        id='mensagemInput'
        value={'Chave:' + '\n'  + props.valueChave + '\n\n' + 'Resultado:' + '\n'  + props.valueMensagem}
      />
    </>
  )
}