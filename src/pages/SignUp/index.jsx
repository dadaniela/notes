import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, HomeImg } from "./styles";

export function SignUp(){
    return(
        <Container>
            <HomeImg alt="home image: sticky notes"></HomeImg>
            <Form>
                <h1>Notes</h1>
                <p>Save and manage your notes in one place</p>
                <h2>Create account</h2>
                <Input placeholder="Name" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Password" type="password" icon={FiLock}/>
                <Button label="Sign up"/>
                <a href="#">Log in</a>
            </Form>
            
        </Container>
    );
}