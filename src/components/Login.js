import React, { useState } from 'react'

export const Login = ({ username, password })  => {


    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <h1>Welcome Back</h1>
            <h2>Log In</h2>
            <form className='loginForm'>
                <div>
                    <input placeholder='Username' id='userLogin'></input>
                </div>
                <div>
                    <input placeholder='Password' id='userPassword'></input>
                </div>
                <div>
                    <button type='submit'>LOG IN</button>
                </div>
            </form>
        </div>
    )
}