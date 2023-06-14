import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../../../server/src/services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, HomeImg } from "./styles";

export function SignIn(){
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // async function handleSignIn(){
    //     if(!email || !password){
    //         return alert("Please enter email and password")
    //     }
    //     await api.post()
    // }
    const data = useAuth();
    console.log("meu contexto =>", data);
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Save and manage your notes in one place</p>
                <h2>Log in</h2>
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    // onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    // onChange={e => setPassword(e.target.value)}
                />
                <Button label="Log in"
                    // onClick={handleSignIn}
                />
                <Link to="/register">Sign in</Link>
            </Form>
            <HomeImg alt="home image: sticky notes"></HomeImg>
        </Container>
    );
}