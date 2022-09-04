import React, {useEffect} from 'react'
import {
    useNavigate,
    Routes,
    Route,
    Link,
 } from 'react-router-dom'
import './header.css'

export const Header = () => {
    // const [hasToken, setHasToken] = (null)

    // const tokenChecker = () => {
    //     localStorage.getItem('token') ? setHasToken(true) : setHasToken(false)
    // }

    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    // tokenChecker()
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
                            }>
                            </Route>
                            <Route path='/home' element={
                                localStorage.getItem('token')
                                ?
                                <>
                                    <Link to='/create_post'>New Post</Link>
                                    <Link to='/profile'>Profile</Link>
                                    <Link to='/' onClick={() => handleLogout()}>Logout</Link>
                                </>
                                : 
                                <>
                                    <Link to='/login_or_register'>Login or Register</Link>
                                </>

                            }>
                            </Route>
                            <Route exact path='/' element={<Link to='/login'>Login/Register</Link>}></Route>
                            <Route path='/login' element={
                                localStorage.getItem('token')
                                ?
                                <>
                                    <Link to='/create_post'>New Post</Link>
                                    <Link to='/profile'>Profile</Link>
                                    <Link to='/' onClick={() => handleLogout()}>Logout</Link>
                                </>     
                                : <Link to='/'>Go Back</Link>}></Route>
                            <Route path='/register' element={<Link to='/'>Go Back</Link>}></Route>
                        </Routes>
                    </nav>
        </div>
    )
}

