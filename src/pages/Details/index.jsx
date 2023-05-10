import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
// import { Links } from "../../components/Section";

export function Details(){
  return(
    <Container>
      <Header/>
      <Section title="Links">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Section>
      <Button label="Back"/>
    </Container>
  );
}