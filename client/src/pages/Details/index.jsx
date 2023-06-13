import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="delete note"/>
          <h1>Intro to Node.js</h1>
          <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
            <Section title="Links">
              <Links>
                <li>
                  <a href="https://github.com/dadaniela" target="_blank">Daniela's GitHub</a>
                </li>
                <li>2</li>
                <li>3</li>
              </Links>
            </Section>
            <Section title="Tags">
              <Tag title="Node.js"/>
              <Tag title="Express"/>
            </Section>
          <Button label="Back"/>
       </Content>
      </main>
    </Container>
  );
}