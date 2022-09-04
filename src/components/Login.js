import React, { useState } from 'react'
import {
    useNavigate,
    Routes,
    Route,
    Link
 } from 'react-router-dom'
import { BASE_URL } from '../api'

export const Login = ()  => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] =  useState(null)
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()

        const loginUser = async () => {

            const response = await fetch(`${BASE_URL}/users/login`, {
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
            console.log(result)
            console.log(result.success)
            await result.success === true ? setSuccess(true) : setSuccess(false)
            localStorage.setItem('token', result.data.token)
            // console.log(localStorage)
            return
        }

        const loginSuccessHandler = async () => {
            localStorage.getItem('token')
            ? navigate(`/home`)
            : null
        }

        let user = {
            username: `${username}`,
            password: `${password}`,
        }

        await loginUser(user) 
        console.log(user)
        loginSuccessHandler()
        setUsername('')
        setPassword('')          
    }

    return (
        <div>
            <h2>Welcome Back!</h2>
            <h3>Login</h3>
                    <form className='loginForm' onSubmit={handleLogin}>
                        <div className='form-user'>
                            <input placeholder='Username' id='userLogin' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                        <div className='form-pass'>
                            <input type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div>
                            <button type='submit'>LOGIN</button>                                       
                        </div>
                        <div>
                            {success == false ? <div>Incorrect Username or Password!</div> : null}
                        </div>
                        <div>
                            <span>Not a member yet?</span>
                        </div>
                        <div>
                            <Link to='/register'>Register</Link>
                        </div>
                    </form>
        </div>
    )
}