import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../../../server/src/services/api";
import avatarPlaceholder from "../../assets/profile-placeholder.jpg";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    const {logOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name}/>
                <div>
                    <span>Welcome,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={logOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
};