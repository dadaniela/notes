import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./styles";

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/dadaniela.png" alt="user profile image"/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input placeholder="Name" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Current password" type="password" icon={FiLock}/>
                <Input placeholder="New password" type="password" icon={FiLock}/>
                <Button label="Save"/>
            </Form>
        </Container>

    );
}