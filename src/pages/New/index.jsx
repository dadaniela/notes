import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./styles";

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <a href="/">back</a>
                    </header>
                    <Input placeholder="Title"/>
                    <TextArea placeholder="write your insights and lists"/>
                </Form>
            </main>
        </Container>
    );
}