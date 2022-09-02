import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
import { Header, Portal, Messages, Posts } from './components'
import { BrowserRouter as Router,
    useNavigate as Navigate,
    Routes,
    Route,
    Link } from 'react-router-dom'

const App = () => {

    return(
            <div>
                <Header />
                    <Routes>
                        {/* <Route path='/Search' element={<Search /> }></Route> */}
                    <Route exact path='/' element={<Posts />}></Route>
                    <Route exact path='/home' element={<Posts />}></Route>
                    <Route path ='/login_or_register' element={<Portal />}></Route>
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
