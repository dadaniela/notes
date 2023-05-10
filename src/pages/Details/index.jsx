import { Container, Links } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Details(){
  return(
    <Container>
      <Header/>
      <Section title="Links">
        <Links>
          <li>
            <a href="https://github.com/dadaniela" target="_blank">Daniela's GitHub</a>
          </li>
          <li>2</li>
          <li>3</li>
        </Links>
      </Section>
      <Button label="Back"/>
    </Container>
  );
}