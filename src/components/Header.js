import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
 } from 'react-router-dom'

export const Header = () => {

    return (
        <div>
            <h1>Stranger's Things</h1>

                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/login_or_register">Logout</Link>
                    </nav>
        </div>
    )
}