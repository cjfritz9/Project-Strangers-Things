import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
import { Header, Login, Profile, Posts, Register, NewPost } from './components'
import { BrowserRouter as Router,
    useNavigate,
    Routes,
    Route,
    Link } from 'react-router-dom'

const App = () => {
    const [hasToken, setHasToken] = useState(false)
    const navigate = useNavigate()

    const tokenChecker = () => {
        localStorage.getItem('token') ? setHasToken(true) : setHasToken(false)
    }

    useEffect(() => {
        localStorage.getItem('token')
        tokenChecker()      
    }, [])

    return(
            <div>
                <Header />
                    <Routes>
                        {/* <Route path='/Search' element={<Search /> }></Route> */}
                    <Route exact path='/' element={<Posts />}></Route>
                    <Route path='/home' element={<Posts />}></Route>
                    <Route path ='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/create_post' element={<NewPost />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                </Routes>
            </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <App />
    </Router>);
