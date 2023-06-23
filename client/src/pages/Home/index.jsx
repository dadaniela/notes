import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { api } from "../../../../server/src/services/api";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { useState, useEffect } from "react";

export function Home(){
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    function handleTagSelected(tagName){
        const alreadySelected = tagsSelected.includes(tagName);
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }
        fetchTags();
    }, []);
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li>
                    <ButtonText
                        title="All"
                        onClick={() => handleTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        </li>  
                    ))
                }
            </Menu>
            <Search>
                <Input placeholder="search" icon={FiSearch}/>
            </Search>
            <Content>
                <Section title="My notes">
                    <Note data={{
                        title: "React",
                        tags:[
                            {id: 1, name: "react"},
                            {id: 2, name: "node"}
                        ]
                    }}>
                    </Note>
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus/>
                New note
            </NewNote>
        </Container>

    );
}