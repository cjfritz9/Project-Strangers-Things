import React, { useState } from 'react'
import { registerUser } from '../api'
import { useNavigate } from 'react-router-dom'
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const Portal = ()  => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const loginHandler = async () => {
        localStorage.getItem('token')
        ? navigate(`/home`)
        : null
    }
    
    const handleRegister = async (event) => {
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
            console.log(result.success)
            result.success === false ? setSuccess(false) : setSuccess(true)
            localStorage.setItem('token', result.data.token)
            console.log(localStorage)
            return
        }

        let user = {
            username: `${username}`,
            password: `${password}`,
        }

        await registerUser(user) 
        // console.log(user)
        loginHandler()
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
                    :<div id='pw-mismatch'>Passwords do not match!</div>
                    }               
                </div>
                <div>
                    {success == false ? <div>That Username is taken!</div> : null }
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
            </div>
        </div>
    )
}