import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })
    
    const collectData = async () => {
        console.warn(name, email, password)

        let result = await fetch('http://localhost:4500/register', {
            method: 'post', headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ name, email, password })
        })

        result = await result.json()
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/')
    }
    return <div className="register">
        <h1>REGISTER FROM</h1>
        <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
        <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
        <button className="appButton" onClick={collectData}> Sign Up</button>
    </div>
}

export default Signup;
