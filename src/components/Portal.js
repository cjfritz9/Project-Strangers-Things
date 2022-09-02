import React, { useState } from 'react'
import { registerUser } from '../api'
import { Link } from 'react-router-dom'
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const Portal = ()  => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // console.log(username, password)

    const handleRegister = (event) => {
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
            localStorage.setItem('token', result.data.token)
            console.log(localStorage)
            return result
        }
        const user = {username, password}
        console.log(user)
        registerUser(user)
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        
    }
    
    return (
        <div>
            <h1>Welcome to Stranger's Things!</h1>
            <h2>Register</h2>
            <form className='registerForm' onSubmit={handleRegister}>
                <div className='form-user'>
                    <input placeholder='Username' id='userRegister' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className='form-pass'>
                    <input type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type='password' placeholder='Confirm Password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  required/>
                </div>
                <div>
                    {
                    password === confirmPassword
                    ?<button type='submit'>REGISTER</button>
                    :<div>Passwords do not match!</div>
                    }               
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
            </div>
        </div>
    )
}