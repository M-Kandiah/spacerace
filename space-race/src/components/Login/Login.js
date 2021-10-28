import React, { useState } from 'react';
import { useAuthContext } from "../contexts/auth";
import { useHistory } from "react-router-dom";
import '../../App.css';


const Login = () => {
    const { login } = useAuthContext();
    const history = useHistory();

    const [ formData, setFormData ] = useState({ username: "", password: "" })
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    
    function handleInput(e) {
        e.persist();
        e.preventDefault();
        setFormData(function(prev){
            return {...prev, [e.target.name]: e.target.value}
            
        })}
    const formIncomplete = () => Object.values(formData).some(v => !v)

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/register'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await login(formData)
            history.push('/main-menu')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} aria-label="login" className="d-flex flex-column login-form">
            <input type="username" aria-label="username" name="username" value={formData.username} onChange={handleInput} placeholder="Username" className="m-1 username" />
            <input type="password" aria-label="password" name="password" value={formData.password} onChange={handleInput} placeholder="Password" className="m-1 password" />
            { error && <div id="error">Wrong Username or Password</div> }
            <input id="submit" type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()} value="Login" />
            <button onClick={handleClick} aria-label="register" className="m-1 register-in" >Register instead</button>
        </form>
       
        
        
        </>
    );
}

export default Login;