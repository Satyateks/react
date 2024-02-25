import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const collectData = async () => {
        console.warn(email, password)

        let result = await fetch('http://localhost:4500/login', {
            method: 'post', headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ email, password })
        })
        result = await result.json()
        console.log(result)
        // if (result.email) {
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate('/')
        } else {
            alert("Plesse Enter Vaild details")
        }
    }
    return (
        <div className="register">
            <h1>Login FROM</h1>
            {/* <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" /> */}
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
            <button className="appButton" onClick={collectData}> Sign Up</button>
        </div>
    )
}
