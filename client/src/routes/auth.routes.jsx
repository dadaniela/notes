import { Routes, Route } from "react-router-dom";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
        </Routes>
    );
}