import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="All" isActive /></li>
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>
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
            <NewNote>
                <FiPlus/>
                New note
            </NewNote>
        </Container>

    );
}