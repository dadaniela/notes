import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    const { logOut } = useAuth();
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dadaniela.png" alt="user profile image" />
                <div>
                    <span>Welcome,</span>
                    <strong>Daniela Trindade</strong>
                </div>
            </Profile>
            <Logout onClick={ logOut }>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
};