import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { Header, Login, Messages, Posts } from './components'

import { fetchAllPosts } from './api';

const App = () => {
    const [title, setTitle] = ([])
    const [body, setBody] = ([])

    return(
        <div>
             <Header />
             {/* <Search /> */}
             {/* <Posts title={title} body={body} /> */}
             <Login />
        </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
