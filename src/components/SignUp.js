import React from 'react'
import { useState } from 'react';


export default function LoginForm({ onClick }) {
    const [input, setInput] = useState({
        "email": "",
        "password": "",
    })

    const handlesubmit = (e) => {
        if (input.email == "") {
            return alert("Empty detail!");
        }
        else if (input.password == "") {
            return alert("Empty detail!");
        }
        sessionStorage.setItem("user", JSON.stringify(input));

    }

    return (
        <div className='form-div'>
            <div className='myForm'>
                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor='mail' className='input-label'>Enter Email:</label><br></br>
                        <input type='email' className='input' id='mail' name='email' value={input.email} onChange={(e) => {
                            setInput({ ...input, [e.target.name]: e.target.value });
                        }}></input>
                    </div>
                    <div>
                        <label htmlFor='password' className='input-label'>Enter Password:</label><br></br>
                        <input type='password' className='input' id='password' name='password' value={input.password} onChange={(e) => {
                            setInput({ ...input, [e.target.name]: e.target.value });
                        }}></input>
                    </div>
                    <div>
                        <button type='submit' className='sbtn'>Login</button>
                        <button type='submit' className='sbtn' onClick={onClick}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}