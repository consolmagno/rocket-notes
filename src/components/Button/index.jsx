import { Container } from "./style";

export function Button({title, loading}){

  return(
  <Container 
    type="button"
    disabled={loading}
  >
    {loading ? 'carregando...' : title }
  </Container>
  )
}