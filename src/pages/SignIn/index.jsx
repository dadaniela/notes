import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Save and manage your notes in one place</p>
                <h2>Log in</h2>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Password" type="password" icon={FiLock}/>
                <Button label="Login"/>
                <a href="#">Sign in</a>
            </Form>
        </Container>
    );
}