import React, { useState } from 'react';
import { useAuthContext } from "../contexts/auth";
import { useHistory } from "react-router-dom";


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
            history.push('/home')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} aria-label="login">
            <input type="username" name="username" value={formData.username} onChange={handleInput} placeholder="Username" />
            <input type="password" name="password" value={formData.password} onChange={handleInput} placeholder="Password" />
            { error && <div id="error">Wrong Username or Password</div> }
            <input type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()} value="Login" />
            <button onClick={handleClick}>Register instead</button>
        </form>
       
        
        
        </>
    );
}

export default Login;