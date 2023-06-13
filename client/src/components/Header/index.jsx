import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dadaniela.png" alt="user profile image" />
                <div>
                    <span>Welcome,</span>
                    <strong>Daniela Trindade</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
};