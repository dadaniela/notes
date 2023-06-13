import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, HomeImg } from "./styles";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("All fields are required");
        }

    }

    return(
        <Container>
            <HomeImg alt="home image: sticky notes"></HomeImg>
            <Form>
                <h1>Notes</h1>
                <p>Save and manage your notes in one place</p>
                <h2>Create account</h2>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button label="Sign up" onClick={handleSignUp}/>
                <Link to="/">Log in</Link>
            </Form>
            
        </Container>
    );
}