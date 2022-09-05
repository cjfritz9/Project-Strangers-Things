import React, {useEffect, useState} from 'react'
import {
    useNavigate,
    Routes,
    Route,
    Link,
 } from 'react-router-dom'

export const Header = () => {
    // const [hasToken, setHasToken] = useState(null)

    // const tokenChecker = () => {
    //     localStorage.getItem('token') ? setHasToken(true) : setHasToken(false)
    // }

    const handleLogout = async () => {
        localStorage.removeItem('token')
    }

    useEffect(() => {
        localStorage.getItem('token')
        // tokenChecker()
    }, [])

    // tokenChecker()
    return (
        <div id='header-wrap'>
            <h1>STRANGER'S THINGS</h1>
                    <nav id='links-menu'>
                        <Routes>
                            <Route path='/profile' element={
                                <>
                                    <Link to='/create_post'>New Post</Link>
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
                                    <Link to='/' onClick={handleLogout}>Logout</Link>
                                </>
                                : 
                                <>
                                    <Link to='/login'>Login or Register</Link>
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
                            <Route path='/create_post' element={
                                <>
                                    <Link to='/profile'>Profile</Link>
                                    <Link to='/'>Home</Link>
                                    <Link to='/' onClick={() => handleLogout()}>Logout</Link>
                                </>
                            }></Route>
                        </Routes>
                    </nav>
        </div>
    )
}

