import { Container } from "./styles";
import { Button } from "../../components/Button"

export function Details(){
  return(
    <Container>
      <h1>Hello World!</h1>
      <Button label="Login" loading />
      <Button label="Sign up"/>
      <Button label="Back"/>
    </Container>
  )
};