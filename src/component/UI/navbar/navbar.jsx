import React from 'react';
import {Link, Route, BrowserRouter } from 'react-router-dom';
import about from "../../../pages/about";
import Posts from "../../../pages/Posts";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/about">Saite</Link>
                <Link to="/Posts">Pages</Link>
            </div>

            <Route path="/about"  component={about}/>
            <Route path='/Posts'>
                <Posts/>
            </Route>
        </div>
    );
};

export default Navbar;