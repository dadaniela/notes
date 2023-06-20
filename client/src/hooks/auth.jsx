import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../../server/src/services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});
    async function signIn({ email, password }){
        try 
        {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            localStorage.setItem("@notes:user", JSON.stringify(user));
            localStorage.setItem("@notes:token", token);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({ user, token });
        } catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Login failed");
            }
        }
    }
    function logOut(){
        const token = localStorage.removeItem("@notes:token");
        const user = localStorage.removeItem("@notes:user");
        setData({});
    }
    useEffect(() => {
        const token = localStorage.getItem("@notes:token");
        const user = localStorage.getItem("@notes:user");
        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);
    return(
        <AuthContext.Provider value={{
            signIn,
            logOut,
            user: data.user
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };