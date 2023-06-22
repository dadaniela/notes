import { api } from "../../../../server/src/services/api";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const navigate = useNavigate();
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
    async function handleNewNote(){
        if(!title){
            return alert("title required");
        }
        if(newLink){
            return alert("there is a link waiting to be added");
        }
        if(newTag){
            return alert("there is a tag waiting to be added");
        }
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        alert("Note saved");
        navigate("/");
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
                    <Input
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea
                        placeholder="write your insights or create lists"
                        onChange={e => setDescription(e.target.value)}
                    />
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
                    <Button
                        label="Save"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
}