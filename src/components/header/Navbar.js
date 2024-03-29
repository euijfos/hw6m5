import React from 'react';
import {Link} from "react-router-dom-v5-compat";
import './navbar.css'
import {useSelector} from "react-redux";

const Navbar = () => {
    const basket = useSelector((state) => state.busketReducer.basket)

    return (
        <nav className='navbar'>
            <ul className='nav'>
                <li className='badge' data-count={basket.length} >
                    <Link to={'/product'}>
                        Product
                    </Link>
                </li>
                <li>
                    <Link to={'/basket'}>
                        Basket
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;