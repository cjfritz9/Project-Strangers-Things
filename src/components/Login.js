import React, { useState } from 'react'
import { registerUser } from '../api'
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const Login = ()  => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // console.log(username, password)

    const handleSubmit = (event) => {
        event.preventDefault()

        const registerUser = async () => {

            const response = await fetch(`${BASE_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({ user: {
                    username: `${username}`,
                    password: `${password}`
                }
                })    
            })
            const result = await response.json()
            const token = result.data.token
            // return token
            // const token = localStorage.setItem(result.data.token)
        }
        console.log(username, password)
        // console.log(token)
        registerUser(username, password)
        setUsername('')
        setPassword('')
    }
    
    return (
        <div>
            <h1>Welcome Back</h1>
            <h2>Log In</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Username' id='userLogin' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <input type='password' placeholder='Password' id='userPassword' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button type='submit'>LOG IN</button>
                </div>
            </form>
        </div>
    )
}