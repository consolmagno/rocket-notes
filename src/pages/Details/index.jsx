import {Container} from "./style.js"
import { Button } from "../../components/Button/index.jsx"

export function Details(){
  return(
    <Container>
    <h1>Hello Word!</h1>

    <Button title="Login" loading/>
    <Button title="Cadastrar"/>
    <Button title="Voltar"/>
    </Container>
  )
}