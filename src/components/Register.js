import { useState } from 'react'
import {
    useNavigate,
    Routes,
    Route,
    Link
 } from 'react-router-dom'
 import { BASE_URL } from '../api'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [success, setSuccess] =  useState(null)
    const navigate = useNavigate()

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
            await result.success === true ? setSuccess(true) : setSuccess(false)
            localStorage.setItem('token', result.data.token)
            // console.log(localStorage)
            return
        }
        console.log(success)

        const registerSuccessHandler = async () => {
            localStorage.getItem('token')
            ? navigate(`/home`)
            : null
        }

        let user = {
            username: `${username}`,
            password: `${password}`,
        }

        await registerUser(user) 
        console.log(user)
        registerSuccessHandler()
        setUsername('')
        setPassword('')
        setConfirmPassword('')            
    }

    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Register</h3>
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
                        <div>
                            <span>Already have an account?</span>
                        </div>
                        <div>
                            <Link to='/login'>Login</Link>
                        </div>
                    </form>
        </div>
    )
}