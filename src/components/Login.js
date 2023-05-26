import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/moj-zadatak/");        
    }
    
    return (
      
    <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h1>Uđi slobodno</h1>
            </label>
            <input 
            id="title"
            type="text" 
            placeholder="What shall we call you?" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="login-btn">UŠO</button>
        </form>
    </div>)
}

export default Login;