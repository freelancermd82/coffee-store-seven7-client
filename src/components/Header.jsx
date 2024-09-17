import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink className='ms-4 mr-4' to="/addCoffee">AddCoffee</NavLink>
        </div>
    );
};

export default Header;