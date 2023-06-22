import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");
    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }
    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }
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
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder="add link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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