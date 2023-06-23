import avatarPlaceholder from "../../assets/profile-placeholder.jpg";
import { api } from "../../../../server/src/services/api";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header(){
    const {logOut, user} = useAuth();
    const navigate = useNavigate();
    function handleLogOut(){
        navigate("/")
        logOut();
    }
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
            <Logout onClick={handleLogOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
};