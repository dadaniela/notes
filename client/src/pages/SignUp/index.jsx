import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../../server/src/services/api";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, HomeImg } from "./styles";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("All fields required")
        }
        api.post("/users", { name, email, password })
        .then(() => {
            alert("Account created");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Account creation failed");
            }
        })
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