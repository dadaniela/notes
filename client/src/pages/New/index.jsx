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
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }
    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew
                                placeholder="add tag"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button label="Save"/>
                </Form>
            </main>
        </Container>
    );
}