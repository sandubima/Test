// login page only front end

import { useState } from "react";
import {toastContainer, toast} from "react-toastify";
import {use Navigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 
}

