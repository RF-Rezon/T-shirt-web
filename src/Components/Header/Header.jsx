import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='space-x-5'>
           <Link className='px-3 py-2 hover:bg-orange-500 hover:border-white hover:border-2 rounded hover:text-black' to="/">Home</Link>
           <Link className='px-3 py-2 hover:bg-orange-500 hover:border-white hover:border-2 rounded hover:text-black'  to="/review">Order Review</Link>
           <Link className='px-3 py-2 hover:bg-orange-500 hover:border-white hover:border-2 rounded hover:text-black'  to="/about">About</Link>
           <Link className='px-3 py-2 hover:bg-orange-500 hover:border-white hover:border-2 rounded hover:text-black'  to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;