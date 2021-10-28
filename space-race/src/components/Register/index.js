import React, { useState, useContext } from 'react';
import { useAuthContext } from "../contexts/auth";
import { Wisdom } from '../contexts'
import { useHistory } from "react-router-dom";

const Register = () => {
    const { register, login } = useAuthContext();
    const wisdom = useContext(Wisdom)
    const history = useHistory();

    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordConfirmation: ""
    })
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    function handleInput(e) {
        e.persist();
        
        setFormData(function(prev){
            return {...prev, [e.target.name]: e.target.value}
            
        })}
    
    const formIncomplete = () => Object.values(formData).some(v => !v) || passwordNoMatch();
    const passwordNoMatch = () => formData.password !== formData.passwordConfirmation;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true)
            await register(formData)
            await login(formData)
            await setLoading(false)
            history.push('/main-menu')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/login'
    }
    
    return (
        <>
        <form onSubmit={handleSubmit} aria-label="register">
            <input type="text" name="username" value={formData.username} onChange={handleInput} placeholder="Username" />
           
            <input type="password" name="password" value={formData.password} onChange={handleInput} placeholder="Password" />
            <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleInput} placeholder="Confirm Password" />
            <input id="submit" type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()} value="Create Account" />
            <button onClick={handleClick}>Login Instead</button>
        </form>
        { error && <div id="error">{error}</div> }
        { loading && <div id="loading">Creating account . . .</div> }
       
        </>
    );
    
}

export default Register