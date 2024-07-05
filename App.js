import React from 'react';
import { Routes,Route,Link}from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Notfound from './Components/Notfound';
function App()
{
    return(
        <div>
            <nav>
                <u1>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Notfound</Link>
                    </li>
                </u1>
            </nav>
            <Routes>
                <Route path="/"elements={<Home/>}/>
                <Route path="/"elements={<About/>}/>
                <Route path="/"elements={<Contact/>}/>
                <Route path="/"elements={<Notfound/>}/>
            </Routes>
        </div>
    )
}
export default App;