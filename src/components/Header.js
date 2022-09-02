import React, {useState} from 'react'
import {
    useNavigate,
    Routes,
    Route,
    Link,
 } from 'react-router-dom'
import './header.css'

export const Header = () => {
    const navigate = useNavigate()

    return (
        <div id='header-wrap'>
            <h1>STRANGER'S THINGS</h1>
                    <nav id='links-menu'>
                        <Routes>
                            <Route path='/profile' element={
                                <>
                                    <Link to="/home">Home</Link>
                                    <Link to='/'>Logout</Link>
                                </>
                            }></Route>
                            <Route path='/home' element={
                                localStorage.getItem('token')
                                ?
                                <>
                                    <Link to='/profile'>Profile</Link>
                                    <Link to='/'>Logout</Link>
                                </>
                                : navigate('/login_or_register')
                            }></Route>
                            <Route exact path='/' element={<Link to='/login_or_register'>Login/Register</Link>}></Route>
                            <Route path='login_or_register' element={<Link to='/'>Go Back</Link>}></Route>
                        </Routes>
                    </nav>
        </div>
    )
}