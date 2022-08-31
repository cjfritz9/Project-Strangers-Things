import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
 } from 'react-router-dom'

export const Header = () => {

    return (
        <header>
            <h1>Stranger's Things</h1>
                <Router>
                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link exact to="/">Logout</Link>
                    </nav>
                </Router>
        </header>
    )
}