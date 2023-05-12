import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <Link to="/">back</Link>
                    </header>
                    <Input placeholder="Title"/>
                    <TextArea placeholder="write your insights and lists"/>
                    <Section title="Links">
                        <NoteItem value="https://github.com/dadaniela" />
                        <NoteItem isNew placeholder="add link" />
                    </Section>
                    <Section title="Tags">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="add tag" />
                        </div>
                    </Section>
                    <Button label="Save"/>
                </Form>
            </main>
        </Container>
    );
}