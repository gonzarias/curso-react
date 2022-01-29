import React, {useState, useContext} from 'react';
import '@styles/Header.scss';

import AppContext from '../context/AppContext';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const {state} = useContext(AppContext);

    const handleToggle = () => {
        {/* Lo cambia al estado inverso*/}
        setToggle(!toggle);
    }

    const handleToggleOrders = () => {
        {/* Lo cambia al estado inverso*/}
        setToggleOrders(!toggleOrders);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        info@example.com
                    </li>

                    <li className="navbar-shopping-cart" 
                        onClick={handleToggleOrders}>
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {/* Si toogle es false no muestra el menu*/}
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>

    );
};


export default Header;